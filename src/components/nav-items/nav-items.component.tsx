import { useMemo } from 'react';

import { SectionIDs } from '@/app/section-ids';
import styles from '@/components/navbar/navbar.module.scss';
import { scrollToId } from '@/hooks/scroll-to-id';

interface NavItem {
  label: string;
  path: string;
  id?: string;
}

const navOptions: NavItem[] = [
  { label: 'Apresentação', path: '/', id: SectionIDs.INTRODUCTION },
  { label: 'Procedimentos', path: '/', id: SectionIDs.PROCEDURES },
  { label: 'Patologias', path: '/patologias/' },
  { label: 'Avaliações', path: '/', id: SectionIDs.REVIEWS },
  { label: 'Dúvidas', path: '/', id: SectionIDs.FAQ },
  { label: 'Contato', path: '/contato' }
];

export interface NavItemsProps {
  itemClassName?: string;
}

export function NavItems({ itemClassName }: NavItemsProps) {
  return navOptions.map(({ label, path, id }) => {
    return (
      <a
        key={path + id}
        className={itemClassName}
        href={path + '#' + id}
        onClick={e => (id !== undefined ? scrollToId(e, path, id) : () => {})}
      >
        {label}
      </a>
    );
  });
}
