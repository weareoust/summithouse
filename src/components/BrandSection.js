import React from "react";
import Arrow from "../components/Arrow";
import { css } from "@emotion/core";
import { animated } from "react-spring";

export default function BrandSection(props) {
  if (props.altChildren) {
    const AltChildren = props.altChildren;
    return (
      <animated.section
        id="1"
        className="w-screen h-screen p-8 pt-24"
        style={props.animation}
        css={css`
          will-change: transform;
          box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
            0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          user-select: none;
        `}
      >
        <AltChildren setSlide={props.advance} current={props.current} />
      </animated.section>
    );
  } else {
    return (
      <animated.section
        id="1"
        className="w-screen h-screen p-8 md:pt-24 relative w-full"
        style={props.animation}
        css={css`
          will-change: transform;
          box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
            0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          user-select: none;
        `}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <img
            className="mb-4 w-2/3 max-w-sm max-h-40"
            src={props.logo}
            alt={props.title}
            style={{ maxHeight: "200px" }}
          />
          <div className="w-full flex flex-col items-center justify-center max-w-lg">
            <h2
              className="text-center text-sm md:text-lg leading-normal font-normal uppercase"
              style={{ color: props.textColor }}
            >
              {props.children}
            </h2>
            <a
              href={props.dest}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase rounded px-4 py-2 text-bold text-center"
              style={{
                backgroundColor: props.buttonColor,
                color: props.buttonTextColor,
                width: "fit-content",
              }}
            >
              {props.buttonText}
            </a>
            {props.arrowColor ? (
              <button
                className="mb-20 md:mb-4 absolute bottom-0 flex justify-center"
                onClick={() => props.advance(props.current + 1)}
                css={css`
                  left: 50%;
                  transform: translateX(-50%);
                `}
              >
                <Arrow color={props.arrowColor} />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </animated.section>
    );
  }
}
