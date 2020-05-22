import React from 'react'
import Arrow from "./Arrow"
import { css } from "@emotion/core"

const leadingButtons = [
  {
    title: "Production",
    index: 3
  },
  {
    title: "Strategy",
    index: 3
  },
  {
    title: "Brand Identity",
    index: 4
  }
]

export default function SummitHero(props) {
  return (
    <div className="h-full text-white flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center mt-24"
        css={css`
          @media screen and (min-width: 1024px) {
            max-width: 70%;
          }
        `
      }>
        <h1 className="uppercase text-center font-heading lg:text-left text-5xl lg:text-6xl lg:mb-10">
          We are a <br/> <span className="font-headingItalic normal-case">Family</span> of agencies.
        </h1>
        <div className="w-full flex flex-col lg:flex-row lg:justify-center">
          {leadingButtons.map((btn, i) => {
            return (
              <button 
                key={i}
                className="uppercase font-heading border border-white px-4 py-1 text-bold mb-4 lg:mx-4"
                css={
                  css`
                    @media screen and (min-width: 1024px) {
                      min-width: 240px;
                    }
                  `
                }
                onClick={() => props.setSlide(i)}
              >
                {btn.title}
              </button>
            )
          })}
        </div>
      </div>
      <button className="flex flex-col items-center my-12 focus:outline-none" onClick={() => props.setSlide(props.current + 1)}>
        <p className="uppercase">Welcome to our House</p>
        <Arrow color={"#fff"}/>
      </button>
    </div>
  )
}
