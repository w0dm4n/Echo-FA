import { IconName } from "./icons"
import { NavLinkProps } from "./nav"

export interface SocialsProps extends NavLinkProps {
  icon: IconName
}

export const SOCIALS: SocialsProps[] = [
  {
    label: "Discord",
    href: "https://discord.gg/vgSWak3t2d",
    icon: "discord"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@echofafr",
    icon: "tiktok"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/echofafr/",
    icon: "instagram"
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@echofarp",
    icon: "youtube"
  },
  {
    label: "Twitter",
    href: "https://x.com/EchoFA_FR",
    icon: "twitter"
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/echofafr",
    icon: "twitch"
  },
  {
    label: "Facebook",
    href: "www.facebook.com/groups/echofafr/",
    icon: "facebook"
  }
]
