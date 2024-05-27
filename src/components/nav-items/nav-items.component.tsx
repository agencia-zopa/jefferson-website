import styles from "@/components/navbar/navbar.module.scss";
import {useMemo} from "react";
import {SectionIDs} from "@/app/section-ids";
import {scrollToId} from "@/hooks/scroll-to-id";


interface NavItem {
  label: string;
  path: string;
  id?: string;
}

const navOptions: NavItem[] = [
    { label: 'Apresentação', path: '/', id: SectionIDs.INTRODUCTION },
    { label: 'Doenças', path: '/' , id: SectionIDs.DISEASES },
    { label: 'Patologias', path: '/patologias/' },
    { label: 'Avaliações', path: '/' , id: SectionIDs.REVIEWS },
    { label: 'Dúvidas', path: '/' , id: SectionIDs.FAQ }
  ]

export interface NavItemsProps {
  itemClassName?: string;
}

export function NavItems({itemClassName}: NavItemsProps) {
  return navOptions.map(({ label, path, id }) => {
      return (
        <a
          key={path + 'id'}
          className={itemClassName}
          href={path + '#' + id}
          onClick={e => id !== undefined ? scrollToId(e, path, id) : () => {}}
        >
          {label}
        </a>
      );
    })
}
