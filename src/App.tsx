import ToggleDark from "./components/darkModeToggle/darkModeToggler"
import { useState } from "react"

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
    <ToggleDark setDark={setDark} setTheme={setTheme} dark={dark}/>
  )
}

export default App
