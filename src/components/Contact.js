import React from "react";
import Arrow from "./Arrow";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

export default function Contact(props) {
  const content = useStaticQuery(graphql`
    query ContactQuery {
      contentfulHomePage(id: { eq: "bae5956e-370f-5adc-ada7-737d4e5cd54b" }) {
        contactEmail
        contactText
      }
    }
  `);
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center max-w-xl">
        <h2 className="uppercase text-center font-heading text-5xl lg:text-6xl lg:mb-10 text-white">
          {content.contentfulHomePage.contactText}
        </h2>
        <a
          href={`mailto:${content.contentfulHomePage.contactEmail}`}
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
