import { FC, Dispatch, SetStateAction } from "react";

interface ChatProps {
  setDark: Dispatch<SetStateAction<boolean>>
  setTheme: () => void
  dark: boolean
}


const Chat:FC<ChatProps> = (props): JSX.Element => {

  return(
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-200 dark:bg-slate-800 transition-all text-slate-800 dark:text-slate-100">
      <div>
        <h1 className="text-2xl">hello world!</h1>
        <p>This is a steaming pile of shit. I like the fucking idea but fuck who the fuck and why was this your first thought when you can't even use pip for fucks sakes</p>
        <p className="mt-4 mb-2 text-sm">{props.dark ? "Dark-Mode Enabled" : "Light-Mode Enabled"}</p>
        <button className="bg-blue-400 dark:bg-teal-800 p-3 rounded transition-all mr-2 fas fa-sun" onClick={() => {props.setDark(false); props.setTheme()}}></button>
        <button className="bg-blue-400 dark:bg-teal-800 p-3 rounded transition-all mr-2 fas fa-moon" onClick={() => {props.setDark(true); props.setTheme()}}></button>
      </div>
    </div>
  )
}

export default Chat;
