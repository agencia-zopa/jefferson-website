'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { SectionIDs } from '@/app/section-ids';
import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import { ScheduleAppointment } from '../schedule-appointment/schedule-appointment.component';
import styles from './navbar.module.scss';

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const currentPath = usePathname();
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const navOptions: NavItem[] = useMemo(
    () => [
      { label: 'Apresentação', href: '/#' + SectionIDs.INTRODUCTION },
      { label: 'Doenças', href: '/#' + SectionIDs.DISEASES },
      { label: 'Patologias', href: '/patologias' },
      { label: 'Avaliações', href: '/#' + SectionIDs.REVIEWS },
      { label: 'Dúvidas', href: '/#' + SectionIDs.FAQ }
    ],
    []
  );

  // FIXME: This has a delay in updating the selected option - maybe go for another approach
  useEffect(() => {
    const matchingOption = navOptions.find(
      option => option.href === currentPath
    );

    if (matchingOption) {
      setSelectedOption(matchingOption.href);
    }
  }, [currentPath, navOptions]);

  return (
    <nav className={styles.container}>
      <LogoWithDetails />
      <div className={styles.items}>
        {navOptions.map(({ label, href }) => {
          const isSelected = href === selectedOption;

          return (
            <a
              key={href}
              className={isSelected ? styles.selected : ''}
              href={href}
              onClick={() => handleOptionClick(href)}
            >
              {label}
            </a>
          );
        })}
      </div>
      <ScheduleAppointment hasShadow={true} />
    </nav>
  );
}
