import React from "react";
import Arrow from "./Arrow";
import { css } from "@emotion/core";

const leadingButtons = [
  {
    title: "Production",
    index: 4,
  },
  {
    title: "Hyper growth",
    index: 1,
  },
  {
    title: "Brand Identity",
    index: 3,
  },
  {
    title: "Digital Advertising",
    index: 2,
  },
];

export default function Contact(props) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center max-w-xl">
        <h2 className="uppercase text-center font-heading text-5xl lg:text-6xl lg:mb-10 text-white">
          We're here whenever you need us
        </h2>
        <a
          href="mailto:hello@summithousefamily.com?subject=Yo%2C%20Summit%20House!"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-heading border border-white px-4 py-1 text-bold text-white"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
