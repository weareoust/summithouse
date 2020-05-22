import { Link } from "gatsby"
import React from "react"
import PageNav from "./PageNav"
import Logo from "./Logo"

export default function Header(props) {
  const currentColor = '#d5593d'

  return (
    <header className="w-full fixed flex z-10">
      <div style={{backgroundColor: currentColor, maxWidth: "540px"}} className="w-full py-6 px-8">
        <Link to="/">
          <Logo/>
        </Link>
      </div>
      <PageNav setActive={props.setActive} current={props.current}/>
    </header>
  )
}

