import Message from "./message/message";
import { Component } from "react";

interface messagePannelProps {
	channel: {
		id: number;
		name: string;
		messages: {
			date: Date;
			sender: string;
			text: string;
		}[];
	};
	onSendMessage: (channel_id: any, text: any) => void;
}

export default class MessagesPanel extends Component<messagePannelProps> {
	state = { input_value: "" };
	send = () => {
		if (this.state.input_value && this.state.input_value != "") {
			this.props.onSendMessage(this.props.channel.id, this.state.input_value);
			this.setState({ input_value: "" });
		}
	};

	handleInput = (e: any) => {
		this.setState({ input_value: e.target.value });
	};

	render() {
		let list: any = (
			<div className="no-content-message">There is no messages to show</div>
		);
		if (this.props.channel && this.props.channel.messages) {
			list = this.props.channel.messages.map((m) => (
				<Message date={m.date} sender={m.sender} text={m.text} />
			));
		}

    
		return (
			<div className="">
				<div id="message-pane" className="">{list}</div>
				{this.props.channel && (
					<div className="">
						<input
							className=""
							type="text"
							onChange={this.handleInput}
							value={this.state.input_value}
						/>
						<button className="" onClick={this.send}>Send</button>
					</div>
				)}
			</div>
		);
	}
}
