import { FC, Dispatch, SetStateAction } from "react";

interface ToggleDarkProps {
  setDark: Dispatch<SetStateAction<boolean>>
  setTheme: () => void
  dark: boolean
}


export default function ToggleDark(props: ToggleDarkProps) {

  return(
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-stone-200 dark:bg-stone-800 transition-all text-slate-800 dark:text-slate-100">
      <div>
        <input id='dark-mode-toggle' type="checkbox" className="hidden"  onChange={() => {props.setDark(!props.dark); props.setTheme()}}/>
        <label htmlFor="dark-mode-toggle" className="bg-purple-300 dark:bg-purple-800 p-3 rounded transition-all mr-2"><i className={props.dark ? "fas fa-sun" : "fas fa-moon"}/></label>
      </div>
    </div>
  )
}
