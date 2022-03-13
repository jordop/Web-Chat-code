interface messageProps {
  sender: string
  text: string
  date: Date
}

export default function Message(props: messageProps) {
  const date = new Date(props.date)
  var time = ""
  time = date.toUTCString()
  return (
    <div className="mb-4">
      <div><b>{props.sender ? props.sender : "Anonymous"}</b><span className="ml-2 text-stone-600 text-sm">{time}</span></div>
      <span>{props.text}</span>
    </div>
  )
}