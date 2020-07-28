import React from "react";
import South from "../images/31South.svg";
import OustLogo from "../images/OUST.svg";
import Ritual from "../images/Ritual.svg";
import WPLogo from "../images/Wild Places.svg";
import WPBG from "../images/WP-BG.png";
import SHBG from "../images/SH-BG.png";
import SummitHero from "./SummitHero";
import Contact from "./Contact";
import { useStaticQuery, graphql } from "gatsby";

export default function useBrandContent() {
  const agencies = useStaticQuery(graphql`
    query AgencyQuery {
      contentfulHomePage(id: { eq: "bae5956e-370f-5adc-ada7-737d4e5cd54b" }) {
        brands {
          arrowColor
          backgroundColor
          backgroundImage {
            fluid(quality: 100) {
              src
            }
          }
          bio {
            bio
          }
          logo {
            file {
              url
            }
          }
          buttonColor
          buttonDestination
          buttonText
          buttonTextColor
          suHoBackgroundColor
          suHoIndicatorColor
          suHoTextColor
          textColor
          name
        }
        heroBg {
          fluid(quality: 100) {
            src
          }
        }
        contactEmail
      }
    }
  `);

  console.log(agencies);

  const brands = [
    {
      title: "Summit House",
      background: `url(${agencies.contentfulHomePage.heroBg.fluid.src}) center right/cover`,
      altChildren: SummitHero,
      theme: {
        headerBg: "#D55A3D",
        headerText: "#D9D9D6",
        indicator: "#D55A3D",
      },
    },
  ];

  agencies.contentfulHomePage.brands.map((b) => {
    brands.push({
      title: b.name,
      background: b.backgroundImage
        ? `url(${b.backgroundImage.fluid.src}) center/cover`
        : b.backgroundColor,
      logo: b.logo.file.url,
      textColor: b.textColor,
      children: b.bio.bio,
      buttonColor: b.buttonColor,
      buttonTextColor: b.buttonTextColor,
      buttonText: b.buttonText,
      arrowColor: b.arrowColor,
      dest: b.buttonDestination,
      theme: {
        headerBg: b.suHoBackgroundColor,
        headerText: b.suHoTextColor,
        indicator: b.suHoIndicatorColor,
      },
    });
  });

  brands.push({
    title: "Contact Us",
    background: "black",
    altChildren: Contact,
    dest: `mailto:${agencies.contentfulHomePage.contactEmail}`,
    theme: {
      headerBg: "#D55A3D",
      headerText: "#D9D9D6",
      indicator: "#D55A3D",
    },
  });

  return brands;
}
