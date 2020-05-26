import React from "react"
import PageNav from "./PageNav"
import Logo from "./Logo"

export default function Header(props) {
  const currentColor = props.theme.headerBg

  return (
    <header className="w-full fixed flex z-10 justify-between">
      <div style={{backgroundColor: currentColor, maxWidth: "540px"}} className="w-4/5 md:w-full py-4 px-6 md:py-6 md:px-8">
        <button onClick={() => props.setActive(0)} className="block w-full">
          <Logo color={props.theme.headerText}/>
        </button>
      </div>
      <PageNav setActive={props.setActive} current={props.current} color={props.theme.indicator}/>
    </header>
  )
}

