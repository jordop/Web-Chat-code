interface messageProps {
  sender: string
  text: string
  id: number
}

export default function Message(props: messageProps) {
  return (
    <div className="mb-4">
      <div><b>{props.sender ? props.sender : "Anonymous"}</b></div>
      <span>{props.text}</span>
    </div>
  )
}