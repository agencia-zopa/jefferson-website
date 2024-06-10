import ArrowRight from '@public/arrow-right.svg';
import closeIcon from '@public/close.svg';
import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';
import { useState } from 'react';

import styles from './mobile-adresses-bar.module.scss';

interface Address {
  title: string;
  description: string;
}

const addresses: Address[] = [
  {
    title: 'Consultório Mont’Serrat',
    description:
      'Av. Cel. Lucas De Oliveira, 505 - Sala 302 - Petrópolis, Porto Alegre - RS, 90440-011'
  },
  {
    title: 'IGO Petrópolis',
    description:
      'Av. Sen. Tarso Dutra, 10 - 3º Andar - Petrópolis, Porto Alegre - RS, 90690-140'
  },
  {
    title: 'IGO Canoas',
    description: 'R. Liberdade, 33 - Mal. Rondon, Canoas - RS, 92020-030'
  },
  {
    title: 'Atendimento',
    description: 'De Segunda À Sexta Das 12:00 às 18h00. (51)999999999'
  }
];

export function MobileAddressBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container} onClick={() => setIsModalOpen(true)}>
      <div className={styles.mobile}>
        <div>
          <Image src={locationIcon} alt={''} />
          <span>Ver localizações</span>
        </div>
        <Image src={ArrowRight} alt={''} />
      </div>
      <div
        className={`${styles.menuModal} ${isModalOpen ? styles.visible : ''}`}
      >
        <button
          className={styles.closeButton}
          onClick={e => {
            setIsModalOpen(false);
            e.stopPropagation();
          }}
        >
          <Image src={closeIcon} alt={'Icone de fechar'} />
        </button>
        {addresses.map(({ title, description }, index) => (
          <div className={styles.address} key={index}>
            <div className={styles.titleAndIcon}>
              <Image src={locationIcon} alt={''} />
              <h1>{title}</h1>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
