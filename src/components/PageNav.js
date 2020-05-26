import React from "react"
import { css } from "@emotion/core"

export default function PageNav(props) {
  const pages = [
    {page: "Summit House"},
    {page: "31 South"},
    {page: "OUST"},
    {page: "Ritual"},
    {page: "WILD PLACES"}
  ]

  return (
    <nav 
      className="fixed right-0 mt-4 mr-2 md:mr-4 inset-y-0 flex flex-col items-center"
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
              <button className="flex justify-end items-center mb-2 focus:outline-none" onClick={() => props.setActive(i)}>
                <p className="opacity-0 text-xs block mb-0 hidden md:block" style={{color: props.color}}>{page.page}</p>
                <div 
                  className={`w-1 md:w-2 h-10 md:h-2 md:ml-4 ${props.current === i ? 'opacity-100' : 'opacity-25'}`} 
                  style={{backgroundColor: props.color}}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

