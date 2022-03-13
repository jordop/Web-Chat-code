import { Component } from "react";
import ChannelList from "./channelList/channelList";
import MessagePanel from "./messages/messagePanel";
import socketClient from "socket.io-client";

const SERVER = "https://210.1.195.160:4000";

interface chatProps {}
export default class Chat extends Component {
	state = {
		channels: null,
		socket: null,
		channel: null,
	};
	socket: any;

	componentDidMount() {
		this.loadChannels();
		this.configureSocket();
	}

	configureSocket = () => {
		var socket = socketClient(SERVER, {
			withCredentials: false,
		});
		socket.on("connection", () => {
			if (this.state.channel) {
				this.handleChannelSelect(this.state.channel.id);
			}
		});
		socket.on("channel", (channel) => {
			let channels = this.state.channels;
			channels.forEach((c: { id: any; participants: any; }) => {
				if (c.id === channel.id) {
					c.participants = channel.participants;
				}
			});
			this.setState({ channels });
		});
		socket.on("message", (message) => {
			let channels = this.state.channels;
			channels.forEach((c: { id: any; messages: any[]; }) => {
				if (c.id === message.channel_id) {
					if (!c.messages) {
						c.messages = [message];
					} else {
						c.messages.push(message);
					}
				}
			});
			this.setState({ channels });
		});
		this.socket = socket;
	};

	loadChannels = async () => {
		fetch(SERVER, {
			method: "GET",
		}).then(async (response) => {
			let data = await response.json();
			this.setState({ channels: data.channels });
			console.log(data.channels);
		});
	};

	handleChannelSelect = (id: number) => {
		let channel = this.state.channels.find((c: { id: number; }) => {
			return c.id === id;
		});
		this.setState({ channel });
		this.socket.emit("channel-join", id, (ack: any) => {});
	};

	handleSendMessage = (channel_id: number, text: string) => {
		this.socket.emit("send-message", {
			channel_id,
			text,
			senderName: this.socket.id,
			id: Date.now(),
		});
	};

	render() {
		return (
			<>
				<ChannelList
					channels={this.state.channels}
					onSelectChannel={this.handleChannelSelect}
				/>
				<MessagePanel
					onSendMessage={this.handleSendMessage}
					channel={this.state.channel}
				/>
			</>
		);
	}
}
