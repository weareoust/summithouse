import React from "react"
import { css } from "@emotion/core"

export default function PageNav(props) {
  const pages = [
    {
      page: "Summit House",
      url: "/"
    },
    {
      page: "31 South",
      url: "/"
    },
    {
      page: "OUST",
      url: "/"
    },
    {
      page: "WILD PLACES",
      url: "/"
    },
    {
      page: "Ritual",
      url: "/"
    }   
  ]

  return (
    <nav 
      className="absolute right-0 mt-4 mr-4"
      css={css`
        &:hover {
          a {
            opacity: 1;
            transition: 0.25s ease-in;
            
          }
        }
      `
    }>
      <ul>
        {pages.map((page, i) => {
          return (
            <li key={i} className="flex justify-end items-center mb-2">
              <a className="opacity-0 text-xs" href={page.url} style={{color: "#d5593d"}}>{page.page}</a>
              <div className="w-2 h-2 ml-4" style={{backgroundColor: "#d5593d"}}></div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

