import { React, useRef } from "react"
import SEO from "../components/seo"
import BrandSection from "../components/BrandSection"
import { css } from '@emotion/core'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Header from "../components/header"
import SHBG from "../images/SH-BG.png"
import South from "../images/31South.svg"
import OustLogo from "../images/OUST.svg"
import Ritual from "../images/Ritual.svg"
import WPLogo from "../images/Wild Places.svg"
import WPBG from "../images/WP-BG.png"
import Arrow from "../components/Arrow"

const leadingButtons = ["Production", "Strategy", "Brand Identity"]

const brands = [
  {
    title: 'Summit House',
    background: `url(${SHBG}) center right/cover`,
    altChildren: 
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
                css={css`
                  @media screen and (min-width: 1024px) {
                    min-width: 240px;
                  }
                `
              }>
                {btn}
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-center my-12">
        <p className="uppercase">Welcome to our House</p>
        <Arrow color={"#fff"}/>
      </div>
    </div>
  },
  {
    title: '31South',
    background: 'white',
    logo: South,
    textColor: 'black',
    children: '31South is a new breed of agency. One lead by veteran entrepreneurs and award winning team members who have not only worked with the biggest brands in the world, but also profoundly know the landscape and nuances of hyper growth.',
    buttonColor: '#DB3832',
    buttonTextColor: 'white',
    buttonText: 'Visit 31South',
    arrowColor: '#000000',
    dest: 'https://www.31south.io/'
  },
  {
    title: 'OUST',
    background: '#2A2A28',
    logo: OustLogo,
    textColor: '#F1EDE2',
    children: 'An Agency specialized in Digital Advertising, Creative Ideation, Social Media, + Influencer Marketing.',
    buttonColor: '#F08D91',
    buttonTextColor: '#F1EDE2',
    buttonText: 'Visit Oust',
    arrowColor: '#F08D91',
    dest: 'https://www.weareoust.co/'
  },
  {
    title: 'Ritual Film Company',
    background: '#EDE2D9',
    logo: Ritual,
    textColor: 'black',
    children: 'With extensive experience in the commercial and documentary world, Ritual is lead by a nimble team of executive producers to produce authentic, compelling content.',
    buttonColor: 'white',
    buttonTextColor: '#050608',
    buttonText: 'Visit Ritual',
    arrowColor: '#050608',
    dest: 'https://www.weareritual.co/'
  },
  {
    title: 'Wild Places',
    background: `url(${WPBG}) center`,
    logo: WPLogo,
    textColor: 'black',
    children: 'A BRAND IDENTITY COMPANY AND DESIGN STUDIO WITH A FOCUS ON CREATING BOLD, ADVENTUROUS IDENTITIES',
    buttonColor: 'black',
    buttonTextColor: '#CAD6C8',
    buttonText: 'Visit Wild Places',
    arrowColor: 'black',
    dest: 'https://gotowildplaces.com/'
  }
]

const AnimatedBrandSection = animated(BrandSection)

export default function IndexPage() {
  const index = useRef(0)
  const [props, set] = useSprings(brands.length, i => ({ y: i * window.innerHeight, sc: 1, display: 'block' }))
  const setIndex = newIndex => {
    index.current = newIndex
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const y = (i - index.current) * window.innerHeight
      return { y, display: 'block' }
    })
  }
  const bind = useGesture({
    onDrag: ({ down, delta: [, yDelta], direction: [, yDir], distance, cancel }) => {
      if (down && distance > window.innerHeight / 2)
        cancel((index.current = clamp(index.current + (yDir > 0 ? -1 : 1), 0, brands.length - 1)))
      set(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const y = (i - index.current) * window.innerHeight + (down ? yDelta : 0)
        const sc = down ? 1 - distance / window.innerHeight / 2 : 1
        return { y, sc, display: 'block' }
      })
    },
    onWheel: ({ wheeling, distance }) => {
      set(i => {
        const sc = wheeling ? 1 - distance / window.innerHeight / 40 : 1
        return { sc, display: 'block' }
      })
    },
    onWheelStart: ({delta: [, yDelta], direction: [, yDir]}) => {
      if (index.current === 0) {
        index.current = index.current + (yDir > 0 ? 1 : 0)
      } else if (index.current === brands.length - 1) {
        index.current = index.current + (yDir > 0 ? 0 : -1)
      } else {
        index.current = index.current + (yDir > 0 ? 1 : -1)
      }

      set(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const y = (i - index.current) * window.innerHeight + yDelta
        return { y, display: 'block' }
      })
    }
  })

  return (
    <main id="root" className="overflow-hidden fixed inset-0 bg-black"
      css={css`
        cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;
      `}
    >
      <SEO title="Home" />
      <Header setActive={setIndex} current={index.current} />
      {props.map(({ y, display, sc }, i) => (
        <animated.div 
          {...bind()}
          key={i}
          style={{ display, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}
          className="w-screen h-screen absolute"
          css={css`
            will-change: transform;
          `}
        >
          <AnimatedBrandSection
            animation={{ transform: sc.interpolate(s => `scale(${s})`), background: brands[i].background}}
            advance={() => setIndex(index.current = index.current + 1)}
            {...brands[i]}
          />
        </animated.div>
      ))}
    </main>
  )
}


