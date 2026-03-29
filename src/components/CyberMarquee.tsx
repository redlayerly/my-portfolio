'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'

gsap.registerPlugin(Observer)

interface MarqueeProps {
  items: string[]
  className?: string
  icon?: string
  iconClassName?: string
  reverse?: boolean
  speed?: number
}

function horizontalLoop(items: HTMLElement[], config: any) {
  items = gsap.utils.toArray(items)
  config = config || {}
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () =>
        tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number

  gsap.set(items, {
    xPercent: (i: number, el: HTMLElement) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string))
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
          parseFloat(gsap.getProperty(el, 'xPercent') as string)
      )
      return xPercents[i]
    },
  })
  gsap.set(items, { x: 0 })
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      parseFloat(gsap.getProperty(items[length - 1], 'scaleX') as string) +
    (parseFloat(config.paddingRight) || 0)
  for (i = 0; i < length; i++) {
    item = items[i]
    curX = (xPercents[i] / 100) * widths[i]
    distanceToStart = item.offsetLeft + curX - startX
    distanceToLoop =
      distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, 'scaleX') as string)
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add('label' + i, distanceToStart / pixelsPerSecond)
    times[i] = distanceToStart / pixelsPerSecond
  }
  tl.progress(1, true).progress(0, true)
  if (config.reversed) {
    tl.vars.onReverseComplete = tl.vars.onReverseComplete || (() => tl.totalTime(tl.rawTime() + tl.duration() * 100))
    tl.reverse()
  }
  return tl
}

const CyberMarquee = ({
  items,
  className = 'text-white bg-black',
  icon = '◆',
  iconClassName = '',
  reverse = false,
  speed = 1,
}: MarqueeProps) => {
  const itemsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (itemsRef.current.length === 0) return
    const tl = horizontalLoop(itemsRef.current, {
      repeat: -1,
      paddingRight: 30,
      reversed: reverse,
      speed,
    })

    Observer.create({
      onChangeY(self: any) {
        let factor = 2.5
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1
        }
        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, '+=0.3')
      },
    })
    return () => tl.kill()
  }, [items, reverse, speed])

  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            key={index}
            ref={(el) => { if (el) itemsRef.current[index] = el }}
            className="flex items-center px-16 gap-x-32"
          >
            {text} <span className={iconClassName}>{icon}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default CyberMarquee
