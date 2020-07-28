import React from "react";
import Arrow from "./Arrow";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

export default function SummitHero(props) {
  const content = useStaticQuery(graphql`
    query HeroQuery {
      contentfulHomePage(id: { eq: "bae5956e-370f-5adc-ada7-737d4e5cd54b" }) {
        button1Text
        button2Text
        button3Text
        button4Text
      }
    }
  `);

  const leadingButtons = [
    {
      title: content.contentfulHomePage.button1Text,
      index: 4,
    },
    {
      title: content.contentfulHomePage.button2Text,
      index: 1,
    },
    {
      title: content.contentfulHomePage.button3Text,
      index: 3,
    },
    {
      title: content.contentfulHomePage.button4Text,
      index: 2,
    },
  ];

  return (
    <div
      className="h-full text-white flex flex-col justify-between"
      css={css`
        @media (max-width: 768px) {
          &:before {
            content: "";
            position: fixed;
            background: black;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            opacity: 0.5;
          }
        }
      `}
    >
      <div className="flex flex-col items-start justify-center mt-0 md:mt-24 w-full max-w-screen-xl mx-auto">
        <h1 className="uppercase text-center font-heading lg:text-left text-5xl lg:text-6xl lg:mb-10">
          We are a <br />{" "}
          <span className="font-headingItalic normal-case">Family</span> of
          agencies.
        </h1>
        <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadingButtons.map((btn, i) => {
            return (
              <button
                key={i}
                className="uppercase font-heading border border-white px-4 py-1 text-bold"
                css={css`
                  @media screen and (min-width: 1024px) {
                    min-width: 240px;
                  }
                `}
                onClick={() => props.setSlide(btn.index)}
              >
                {btn.title}
              </button>
            );
          })}
          <a
            href="mailto:hello@summithousefamily.com?subject=Yo%2C%20Summit%20House!"
            className="uppercase font-heading px-4 py-1 text-bold text-white text-center md:col-span-2"
            style={{ background: "#D55A3D" }}
          >
            Contact
          </a>
        </div>
      </div>
      {/* <button
        className="flex flex-col items-center my-12 focus:outline-none"
        onClick={() => props.setSlide(props.current + 1)}
      >
        <p className="uppercase">Welcome to our House</p>
        <Arrow color={"#fff"} />
      </button> */}
    </div>
  );
}
