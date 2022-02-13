import ToggleDark from "./components/darkModeToggle/darkModeToggler"
import { useState } from "react"
import Chat from "./components/chat/chat"

function App() {
  const [dark, setDark] = useState(true)

  const setTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (dark === true ) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  setTheme()

  return (
    <div className="text-slate-800 dark:text-slate-100 bg-slate-200 dark:bg-slate-800 w-screen h-screen">
      {/* <ToggleDark setDark={setDark} setTheme={setTheme} dark={dark}/> */}
      
      <Chat/>
    </div>
  )
}

export default App
