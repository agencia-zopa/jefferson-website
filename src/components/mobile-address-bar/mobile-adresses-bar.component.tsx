import ArrowRight from '@public/arrow-right.svg';
import closeIcon from '@public/close.svg';
import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';
import {ReactNode, useState} from 'react';

import styles from './mobile-adresses-bar.module.scss';

interface Address {
  title: string;
  description: ReactNode;
}

export function MobileAddressBar() {
  const addresses: Address[] = [
    {
      title: 'Consultório Mont’Serrat',
      description:
        <span>Av. Cel. Lucas De Oliveira, 505 - Sala 302 - Petrópolis, Porto Alegre - RS, <span className={styles.noWrap}>90440-011</span></span>
    },
    {
      title: 'IGO Petrópolis',
      description:
        <span>Av. Sen. Tarso Dutra, 10 - 3º Andar - Petrópolis, Porto Alegre - RS, <span className={styles.noWrap}>90690-140</span></span>
    },
    {
      title: 'IGO Canoas',
      description: <span>R. Liberdade, 33 - Mal. Rondon, Canoas - RS, <span className={styles.noWrap}>92020-030</span></span>
    },
    {
      title: 'Atendimento',
      description: <span>De Segunda À Sexta Das 08:00 às 19h00. <span className={`${styles.noWrap} ${styles.bold}`}>(51) 99152-6125</span></span>
    }
  ];

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
