"use client"

import { Japan, Sub, Wrapper } from "@/components/kit"
import { Line } from "@/components/line"
import { Marquee } from "@/components/marquee"
import { Sprite } from "@/components/sprite"
import { APP_NAME } from "@/config/app"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRef } from "react"
import s from "./gallery.module.scss"

const Img = ({ id }: { id: number }) => {
  return (
    <div className={s.img}>
      <Image
        src={`/img/photos/echo-fa-serveur-fr-gta-rp-photo-in-game-${id}.png`}
        alt={APP_NAME}
        width={800}
        height={450}
        quality={100}
        draggable={false}
        sizes="(max-width: 500px) 350px, (max-width: 768px)  450px, (max-width: 900px) 550px, 667px"
      />
    </div>
  )
}

export const Gallery = () => {
  const t = useTranslations("Home.Gallery")
  const galleryRef = useRef<HTMLDivElement>(null)
  const girlRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const gallery = galleryRef.current

    gsap.from(girlRef.current, {
      y: "25%",
      ease: "none",
      scrollTrigger: {
        trigger: gallery,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
      }
    })
  })

  return (
    <div className={s.gallery}>
      <Wrapper className={s.wrapper}>
        <div className={s.heading}>
          <Sub className={s.sub}>{t("sub")}</Sub>
          <h2 className={s.title}>
            <span className={s.l1}>{t("title.line1")}</span>
            <span className={s.l2}>
              {t("title.line2")}
              <Japan className={s.japan}>ブランディング</Japan>
            </span>
          </h2>
        </div>
        <div className={s.girl}>
          <Image
            src="/img/home-gallery-girl.webp"
            ref={girlRef}
            alt={APP_NAME}
            width={1200}
            height={1746}
            quality={100}
            draggable={false}
            sizes="(max-width: 500px) 350px, (max-width: 768px)  450px, (max-width: 900px) 550px, 667px"
          />
          <Sprite id="blur" className={s.primary} viewBox="0 0 467 467" />
          <Sprite id="blur" className={s.secondary} viewBox="0 0 467 467" />
          <Line
            direction="left"
            color="primary"
            zIndex={1500}
            top={40}
            width={10}
          />
          <Line
            direction="left"
            color="secondary"
            zIndex={1500}
            top={40}
            width={12}
          />
        </div>
        <div className={s.right}>
          <Marquee direction="up" className={s.marquee}>
            {Array.from({ length: 10 }, (_, i) => (
              <Img key={i + 1} id={i + 1} />
            ))}
          </Marquee>
          <Marquee direction="down" className={s.marquee}>
            {Array.from({ length: 9 }, (_, i) => (
              <Img key={i + 11} id={i + 11} />
            ))}
          </Marquee>
        </div>
      </Wrapper>
      <Line
        direction="left"
        color="primary"
        zIndex={1500}
        top={75}
        width={22}
      />
    </div>
  )
}
