import React, { useState } from "react"
import { css } from "@emotion/core"

export default function PageNav(props) {
  const [activePage, setActivePage] = useState(props.current)
  const pages = [
    {page: "Summit House"},
    {page: "31 South"},
    {page: "OUST"},
    {page: "Ritual"},
    {page: "WILD PLACES"}
  ]

  return (
    <nav 
      className="absolute right-0 mt-4 mr-4"
      css={css`
        p {
          transition: 0.25s ease-in;
          user-select: none;
        }
        &:hover {
          p {
            opacity: 1;
          }
        }
      `
    }>
      <ul>
        {pages.map((page, i) => {
          return (
            <li key={i} className="flex justify-end">
              <button className="flex justify-end items-center mb-2 focus:outline-none" onClick={() => {
                setActivePage(i)
                props.setActive(i)
              }}>
                <p className="opacity-0 text-xs block mb-0" style={{color: "#d5593d"}}>{page.page}</p>
                <div 
                  className={`w-2 h-2 ml-4 ${activePage === i ? 'opacity-100' : 'opacity-25'}`} 
                  style={{backgroundColor: "#d5593d"}}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

