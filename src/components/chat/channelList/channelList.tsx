import { Component } from "react";
import Channel from "./channel/channel";
import ToggleDark from "../../darkModeToggle/darkModeToggler";

interface ChannelListProps {
	channels: {
		id: number;
		name: string;
		participants: number;
	}[];
  onSelectChannel: (id: number) => void
}
export default class ChannelList extends Component<ChannelListProps> {

	render() {
		let list: any = (
			<div className="no-content-message">There is no channels to show</div>
		);
		if (this.props.channels && this.props.channels.map) {
			list = this.props.channels.map((c) => (
				<Channel
					key={c.id}
					id={c.id}
					name={c.name}
					participants={c.participants}
					onClick={this.props.onSelectChannel}
				/>
			));
		}

		return (
				<div className="">
					{list}
				</div>

		);
	}
}
