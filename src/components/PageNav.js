import React from "react"

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
    <nav className="absolute right-0">
      <ul>
        {pages.map((page, i) => {
          return (
            <li key={i} className="flex justify-end items-center">
              <a className="text-sm" href={page.url}>{page.page}</a>
              <div className="w-3 h-3 ml-4" style={{backgroundColor: "#d5593d"}}></div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

