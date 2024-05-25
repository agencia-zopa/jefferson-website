'use client';
import { useState } from 'react';

import { SectionIDs } from '@/app/section-ids';
import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import { ScheduleAppointment } from '../schedule-appointment/schedule-appointment.component';
import styles from './navbar.module.scss';

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const [selectedOption, setSelectedOption] = useState('apresentacao');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const navOptions: NavItem[] = [
    { label: 'Apresentação', href: SectionIDs.INTRODUCTION },
    { label: 'Doenças', href: SectionIDs.DISEASES },
    { label: 'Patologias', href: SectionIDs.PATHOLOGIES },
    { label: 'Avaliações', href: SectionIDs.REVIEWS },
    { label: 'Dúvidas', href: SectionIDs.FAQ }
  ];

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
              href={`#${href}`}
              onClick={() => handleOptionClick(href)}
            >
              {label}
            </a>
          );
        })}
      </div>
      <div>
        <ScheduleAppointment hasShadow={true} />
      </div>
    </nav>
  );
}
