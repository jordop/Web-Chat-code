import { Component } from "react";
import Channel from './channel/channel'

interface ChannelListProps {
  channels: {
    id: number;
    name: string;
    participants: number;
  }[]
}

export default function ChannelList(props: ChannelListProps) {

  let list: any = `There is no channels to show`;
  if (props.channels) {
    list = props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants}/>);
  }

  return(
    <div className="w-2/12">
      {list}
    </div>
  )
}
