import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { ReglementItemProps } from "@/config/reglement"
import s from "./list.module.scss"

export const Card = ({
  icon,
  title,
  slug,
  submenu,
  href
}: ReglementItemProps) => (
  <>
    <li>
      <Link
        href={href ? href : `/serveur/reglement/${slug}`}
        className={s.card}
      >
        <Icon icon={icon} />
        <h2>{title}</h2>
      </Link>
    </li>
    {submenu && submenu.map((item) => <Card key={item.slug} {...item} />)}
  </>
)

export const List = ({ list }: { list: ReglementItemProps[] }) => {
  return (
    <ul className={s.list}>
      {list.map((item) => (
        <Card key={item.slug} {...item} />
      ))}
    </ul>
  )
}
