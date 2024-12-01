"use client"

import { Icon } from "@/components/icon"
import { Sub, Wrapper } from "@/components/kit"
import { Link } from "@/components/link"
import { Sprite } from "@/components/sprite"
import { APP_URL_FIVEM } from "@/config/app"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useTranslations } from "next-intl"
import Image from "next/image"
import s from "./hero.module.scss"

export const Hero = () => {
  const t = useTranslations("Join")

  useGSAP(() => {
    gsap.to(`.${s.bg} > div`, {
      y: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: `.${s.bg}`,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  })

  return (
    <div className={s.hero}>
      <Wrapper>
        <div className={s.heading}>
          <Sub className={s.sub}>{t("sub")}</Sub>
          <h2 className={s.title}>
            <span className={s.l1}>{t("title.line1")}</span>
            <span className={s.l2}>
              <Sprite id="logo-text" viewBox="0 0 334 165" />
            </span>
            <span className={s.l3}>{t("title.line3")}</span>
          </h2>
          <div className={s.content}>
            <p>
              <strong>{t("txt1")}</strong>
            </p>
            <p>{t("txt2")}</p>
          </div>
        </div>
        <div className={s.right}>
          <Image
            src="/img/rejoindre-hero-characters.webp"
            width={1642}
            height={1192}
            quality={100}
            draggable={false}
            className={s.img}
            alt="Characters"
          />
          <Link href={APP_URL_FIVEM} className={s.launch}>
            <span className={s.launchTxt}>
              {t("launch")}
              <Sprite
                id="logo-text"
                viewBox="0 0 334 165"
                className={s.launchTxtLogo}
              />
            </span>
            <span className={s.launchIcon}>
              <Icon icon="fivem" />
            </span>
          </Link>
        </div>
      </Wrapper>
      <div className={s.bg}>
        <div />
      </div>
    </div>
  )
}
