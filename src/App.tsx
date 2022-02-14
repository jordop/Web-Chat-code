import { useState } from "react";
import Chat from "./components/chat/chat";


function App() {
  return (
    <div className="flex text-stone-800 dark:text-stone-100 bg-stone-200 dark:bg-stone-800 w-screen h-screen">
      
      <Chat/>
    </div>
  )
}

export default App
