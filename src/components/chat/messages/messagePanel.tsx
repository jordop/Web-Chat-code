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
			<div className="w-10/12 h-full m-3 flex flex-col items-start">
				<div className="self-stretch h-full">{list}</div>
				{this.props.channel && (
					<div className="w-full h-20 border-t border-stone-500 dark:border-stone-200 flex justify-center items-center p-2">
						<input
							className="m-auto mr-4 p-2 h-6 w-full ml-4 rounded text-stone-500 dark:text-stone-200 dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
							type="text"
							onChange={this.handleInput}
							value={this.state.input_value}
						/>
						<button className="bg-purple-500 pl-4 pr-4 rounded h-10" onClick={this.send}>Send</button>
					</div>
				)}
			</div>
		);
	}
}
