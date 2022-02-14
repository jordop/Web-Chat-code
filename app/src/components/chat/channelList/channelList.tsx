import { Component } from "react";
import Channel from "./channel/channel";
import ToggleDark from "../../darkModeToggle/darkModeToggler";

interface ChannelListProps {
	channels: {
		id: number;
		name: string;
		participants: number;
	}[];
	onSelectChannel: (id: any) => void;
}
export default class ChannelList extends Component<ChannelListProps> {
	
  state = {
    dark: true
  }

  handleThemeChange = (dark: boolean) => {
    this.setState({ dark: dark })
  }
  
  handleClick = (id: number) => {
		this.props.onSelectChannel(id);
	};

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
					onClick={this.handleClick}
				/>
			));
		}

    const setTheme = () => {
      if (this.state.dark === true ) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }

    setTheme()

		return (
			<div className="w-2/12 h-screen flex flex-col">
				<div className="w-full h-5/6 border-r dark:border-stone-200 border-stone-500">
					{list}
				</div>
        <div className="p-4 pt-6 w-full h-1/6 border-t border-r border-stone-500 dark:border-stone-200">
          <ToggleDark setDark={this.handleThemeChange} setTheme={setTheme} dark={this.state.dark}/>
        </div>
			</div>
		);
	}
}
