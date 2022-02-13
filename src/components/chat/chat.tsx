import { Component } from "react";
import Channellist from './channelList/channelList'
export default class Chat extends Component {
  state = {
    channels: [{ id: 1, name: 'first', participants: 10 }]
  }
  render() {
      return (
          <div classname="chat-app">
            <Channellist channels="{this.state.channels}"></Channellist>
          </div>
      );
  }
}