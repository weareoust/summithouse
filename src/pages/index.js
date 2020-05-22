import { React, useState, useEffect } from "react"
import SEO from "../components/seo"
import BrandSection from "../components/BrandSection"
import { css } from '@emotion/core'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Header from "../components/header"
import brands from "../components/brands"

const AnimatedBrandSection = animated(BrandSection)

export default function IndexPage() {
  const [index, setIndex] = useState(0)
  const winH = (typeof window !== 'undefined') ? window.innerHeight : 900
  const [props, set] = useSprings(brands.length, i => (
    { 
      y: i * winH, 
      sc: 1, display: 'block' 
    }
  ))

  const bind = useGesture({
    onDrag: ({ down, delta: [, yDelta], direction: [, yDir], distance, cancel }) => {
      if (down && distance > window.innerHeight / 2)
        cancel(setIndex(clamp(index + (yDir > 0 ? -1 : 1), 0, brands.length - 1)))
      set(i => {
        if (i < index - 1 || i > index + 1) return { display: 'none' }
        const y = (i - index) * window.innerHeight + (down ? yDelta : 0)
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
      if (index === 0) {
        setIndex(index + (yDir > 0 ? 1 : 0))
      } else if (index === brands.length - 1) {
        setIndex(index + (yDir > 0 ? 0 : -1))
      } else {
        setIndex(index + (yDir > 0 ? 1 : -1))
      }

      set(i => {
        if (i < index - 1 || i > index + 1) return { display: 'none' }
        const y = (i - index) * window.innerHeight + yDelta
        return { y, display: 'block' }
      })
    }
  })

  useEffect(() => {
    set(i => {
      const y = (i - index) * winH
      if (i < index - 1 || i > index + 1) return { y, display: 'none' }
      return { y, display: 'block' }
    })
  },[index, set, winH])

  return (
    <main id="root" className="overflow-hidden fixed inset-0 bg-black"
      css={css`
        cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;
        
        * {
          cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;
        }
      `}
    >
      <SEO title="Home" />
      <Header setActive={setIndex} current={index} />
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
            advance={setIndex}
            current={index}
            {...brands[i]}
          />
        </animated.div>
      ))}
    </main>
  )
}


