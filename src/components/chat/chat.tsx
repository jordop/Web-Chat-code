import { FC } from "react";
import styled from "styled-components";
import image from '../../assets/curseddankmemes27.jpg';

interface ChatProps {
}


const Chat:FC<ChatProps> = (props): JSX.Element => {
  return(
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-200 dark:bg-slate-800 transition-all text-slate-800 dark:text-slate-100">
      <div>
        <h1 className="text-2xl">hello world!</h1>
        <p>This is a steaming pile of shit. I like the fucking idea but fuck who the fuck and why was this your first thought when you can't even use pip for fucks sakes</p>
        <button className="bg-blue-400 dark:bg-teal-800 p-3 rounded transition-all">Looking good!</button>
      </div>
    </div>
  )
}

export default Chat;
