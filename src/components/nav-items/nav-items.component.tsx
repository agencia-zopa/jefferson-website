import React, { useMemo } from 'react';

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
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
    id: string | undefined
  ) => void;
}

export function NavItems({ itemClassName, onClick }: NavItemsProps) {
  return navOptions.map(({ label, path, id }) => {
    return (
      <a
        key={path + id}
        className={itemClassName}
        href={path + '#' + id}
        onClick={e => onClick?.(e, path, id)}
      >
        {label}
      </a>
    );
  });
}
