'use client';
import { useState } from 'react';

import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import { ScheduleAppointment } from '../schedule-appointment/schedule-appointment.component';
import styles from './navbar.module.scss';

export function Navbar() {
  const [selectedOption, setSelectedOption] = useState('apresentacao');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <nav className={styles.container}>
      <LogoWithDetails />
      <div className={styles.navOptions}>
        <a
          className={`${styles.navItem} ${
            selectedOption === 'apresentacao' ? styles.selected : ''
          }`}
          href={'#'}
          onClick={() => handleOptionClick('apresentacao')}
        >
          Apresentação
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === 'doencas' ? styles.selected : ''
          }`}
          href={'#'}
          onClick={() => handleOptionClick('doencas')}
        >
          Doenças
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === 'patologias' ? styles.selected : ''
          }`}
          href={'#'}
          onClick={() => handleOptionClick('patologias')}
        >
          Patologias
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === 'avaliacoes' ? styles.selected : ''
          }`}
          href={'#'}
          onClick={() => handleOptionClick('avaliacoes')}
        >
          Avaliações
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === 'duvidas' ? styles.selected : ''
          }`}
          href={'#'}
          onClick={() => handleOptionClick('duvidas')}
        >
          Dúvidas
        </a>
      </div>
      <div>
        <ScheduleAppointment hasShadow={true} />
      </div>
    </nav>
  );
}
