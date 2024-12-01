"use client"

import { Link } from "@/components/link"
import {
  reglement,
  ReglementItemProps,
  reglementPath
} from "@/config/reglement"
import { usePathname } from "next/navigation"
import s from "./aside.module.scss"

interface MenuItemProps extends ReglementItemProps {
  baseHref: string
}

const MenuItem = ({ baseHref, slug, title, href, submenu }: MenuItemProps) => {
  const url = `${baseHref}/${slug}`
  const pathname = usePathname()

  return (
    <li>
      <Link href={href ? href : url} data-active={pathname === url}>
        {title}
      </Link>
      {submenu && (
        <ul>
          {submenu.map((subItem) => (
            <MenuItem key={subItem.slug} baseHref={url} {...subItem} />
          ))}
        </ul>
      )}
    </li>
  )
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        {reglement.map((item) => (
          <MenuItem key={item.slug} baseHref={reglementPath} {...item} />
        ))}
      </ul>
    </nav>
  )
}

export const Aside = () => {
  return (
    <aside className={s.aside}>
      <Navigation />
    </aside>
  )
}
