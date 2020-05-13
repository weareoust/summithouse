import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Header from "../components/header"
import Arrow from "../images/Arrow.svg"
import SHBG from "../images/SH-BG.png"
import South from "../images/31South.svg"
import OustLogo from "../images/OUST.svg"
import Ritual from "../images/Ritual.svg"
import WPLogo from "../images/Wild Places.svg"
import WPBG from "../images/WP-BG.png"


const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <main className="">
      <Header/>
      <section className="w-full h-screen bg-no-repeat bg-center text-white p-8 pt-24" style={{backgroundImage: `url(${SHBG})`}}>
        <div className="flex flex-col">
          <h1 className="uppercase text-center">We are a <span className="text-bolb">Family</span> of agencies.</h1>
          <div className="w-full flex flex-col">
            <button className="uppercase border border-white px-4 py-1 text-bold mb-4">Production</button>
            <button className="uppercase border border-white px-4 py-1 text-bold mb-4">Strategy</button>
            <button className="uppercase border border-white px-4 py-1 text-bold mb-4">Brand Identity</button>
          </div>
          <div className="flex flex-col items-center mt-auto">
            <p className="uppercase">Welcome to our House</p>
            <img src={Arrow} alt="arrow"/>
          </div>
        </div>
      </section>
      <section className="w-full h-screen bg-white p-8 pt-24">
        <div className="flex flex-col">
          <img className="mb-4" src={South} alt="31South"/>
          <div className="w-full flex flex-col">
            <h2 className="text-center text-lg leading-normal font-normal">31South is a new breed of agency. One lead by veteran entrepreneurs and award winning team members who have not only worked with the biggest brands in the world, but also profoundly know the landscape and nuances of hyper growth.</h2>
            <Link to="/" className="uppercase rounded px-4 py-2 text-bold text-white text-center" style={{backgroundColor: "#DB3832"}}>Visit 31 South</Link>
            <img className="mt-4" src={Arrow} alt="arrow"/>
          </div>
        </div>
      </section>
      <section className="w-full h-screen p-8 pt-24" style={{backgroundColor: "#2A2A28"}}>
        <div className="h-full flex flex-col">
          <img className="mb-4" src={OustLogo} alt="OUST"/>
            <h2 className="text-center text-lg leading-normal font-normal" style={{color: "#F1EDE2"}}>
              an Agency specilized in Digital Advertising, Creative Ideation, Social Media, + Influencer Marketing
            </h2>
            <Link to="/" className="uppercase rounded px-4 py-2 text-bold text-white text-center" style={{backgroundColor: "#F08D91", color: "#F1EDE2"}}>
              Visit Oust
            </Link>
            <img className="mt-auto" src={Arrow} alt="arrow"/>
        </div>
      </section>
      <section className="w-full h-screen p-8 pt-24" style={{backgroundColor: "#EDE2D9"}}>
        <div className="h-full flex flex-col">
          <img className="mb-4" src={Ritual} alt="Ritual Film Company"/>
            <h2 className="text-center text-lg leading-normal font-normal" style={{color: "#050706"}}>
              With extensive experience in the commercial and documentary world, Ritual is lead by a nimble team of executive producers to produce authentic, compelling content.
            </h2>
            <Link to="/" className="uppercase rounded px-4 py-2 text-bold text-white text-center bg-white" style={{color: "#050706"}}>
              Visit Ritual
            </Link>
            <img className="mt-auto" src={Arrow} alt="arrow"/>
        </div>
      </section>
      <section className="w-full h-screen p-8 pt-24 bg-no-repeat bg-center" style={{backgroundImage: `url(${WPBG})`}}>
        <div className="h-full flex flex-col">
          <img className="mb-4" src={WPLogo} alt="Wild Places"/>
            <h2 className="text-center text-lg leading-normal font-normal">
              A BRAND IDENTITY COMPANY AND DESIGN STUDIO WITH A FOCUS ON CREATING BOLD, ADVENTUROUS INDENTITIES
            </h2>
            <Link to="/" className="uppercase rounded px-4 py-2 text-bold text-white text-center bg-black" style={{color: "#CAD6C8"}}>
              Visit Wild Places
            </Link>
            <img className="mt-auto" src={Arrow} alt="arrow"/>
        </div>
      </section>
    </main>
    
  </main>
)

export default IndexPage
