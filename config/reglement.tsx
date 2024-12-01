import { IconName } from "./icons"

export interface ReglementItemProps {
  icon: IconName
  title: string
  slug: string
  href?: string
  submenu?: ReglementItemProps[]
}

export const reglement: ReglementItemProps[] = [
  {
    icon: "book",
    title: "Les bases du RP",
    slug: "bases-rp"
  },
  {
    icon: "city",
    title: "Règlement légal",
    slug: "reglement-legal",
    submenu: [
      {
        icon: "police",
        title: "Gouvernement & Services publics",
        slug: "gouvernement-services-publics",
        href: "https://sites.google.com/view/reglement-echo-rp/r%C3%A8glement-l%C3%A9gal/gouvserv-public"
      },
      {
        icon: "building",
        title: "Entreprises",
        slug: "entreprises",
        href: "https://sites.google.com/view/reglement-echo-rp/r%C3%A8glement-l%C3%A9gal/entreprises"
      }
    ]
  },
  {
    icon: "unavailable",
    title: "Règlement illégal",
    slug: "reglement-illegal",
    href: "https://sites.google.com/view/reglement-echo-rp/r%C3%A8glement-ill%C3%A9gal",
    submenu: [
      {
        icon: "taxi",
        title: "Convoi illégal",
        slug: "convoi-illegal",
        href: "https://sites.google.com/view/reglement-echo-rp/r%C3%A8glement-ill%C3%A9gal/convoi-illegal"
      }
    ]
  },
  {
    icon: "island",
    title: "Règlement Cayo",
    slug: "reglement-cayo",
    href: "https://sites.google.com/view/reglement-echo-rp/r%C3%A8glement-cayo"
  },
  {
    icon: "folderPlus",
    title: "Création de dossiers",
    slug: "creation-dossiers",
    href: "https://sites.google.com/view/reglement-echo-rp/cr%C3%A9ation-dossier"
  },
  {
    icon: "prison",
    title: "Avertissements et sanctions",
    slug: "avertissements-sanctions",
    href: "https://sites.google.com/view/reglement-echo-rp/avertissements-et-sanctions"
  }
]

export const reglementPath = "/serveur/reglement"
