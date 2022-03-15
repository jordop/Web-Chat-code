import { Component } from "react";
import ToggleDark from "../../darkModeToggle/darkModeToggler";
import ChannelList from "../channelList/channelList";

interface SidebarProps {
  channels:[], 
  handleChannelSelect: (id: number) => void
}

export default class Sidebar extends Component<SidebarProps> {

  state = {
    dark: true
  }

  handleThemeChange = (dark: boolean) => {
    this.setState({ dark: dark })
  }
  
  handleClick = (id: number) => {
		this.props.handleChannelSelect(id);
	};

  render() {

    const setTheme = () => {
      if (this.state.dark === true ) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }

    setTheme()

    return(
      <div className="">
        <ChannelList
            channels={this.props.channels}
            onSelectChannel={this.handleClick}
          />
        <div className="">
          <ToggleDark setDark={this.handleThemeChange} setTheme={setTheme} dark={this.state.dark}/>
        </div>
      </div>
    )
  }
}