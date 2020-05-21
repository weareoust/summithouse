import React from 'react'
import { Link } from 'gatsby'
import Arrow from "../components/Arrow"
import { css } from "@emotion/core"
import { animated } from 'react-spring'

export default function BrandSection(props) {

  if (props.altChildren) {
    return (
      <animated.section 
        id="1" 
        className="w-screen h-screen p-8 pt-24"
        style={props.animation}
        css={css`
          will-change: transform;
          box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          user-select: none;
        `}
      >
        {props.altChildren}
      </animated.section>
    )
  } else {
    return (
      <animated.section 
        id="1" 
        className="w-screen h-screen p-8 pt-24"
        style={props.animation}
        css={css`
          will-change: transform;
          box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          user-select: none;
        `}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <img className="mb-4" src={props.logo} alt={props.title}/>
          <div className="w-full flex flex-col items-center max-w-lg">
            <h2 className="text-center text-lg leading-normal font-normal uppercase" style={{color: props.textColor}}>{props.children}</h2>
            <Link 
              to="/"
              className="uppercase rounded px-4 py-2 text-bold text-center"
              style={{backgroundColor: props.buttonColor, color: props.buttonTextColor, width: "fit-content"}}
            >{props.buttonText}</Link>
            <div className="mt-32">
              <Arrow color={props.arrowColor}/>
            </div>
          </div>
        </div>
      </animated.section>
    )
  }
}
