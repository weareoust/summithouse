import { Link } from "gatsby"
import React from "react"
import PageNav from "./PageNav"
import Logo from "./Logo"

export default function Header(props) {
  const currentColor = '#d5593d'

  return (
    <header className="w-full fixed flex">
      <div style={{backgroundColor: currentColor}} className="py-6 px-8">
        <Link to="/">
          <Logo className="w-full overflow-visible"/>
        </Link>
      </div>
      <PageNav/>
    </header>
  )
}

