import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';

import styles from './adresses-bar.module.scss';
import {ReactNode} from "react";

interface Address {
  title: string;
  description: ReactNode;
}

export function AddressBar() {
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

  return (
    <div className={styles.container}>
      {addresses.map(({ title, description }, index) => (
        <div className={styles.address} key={index}>
          <div className={styles.titleAndIcon}>
            <Image src={locationIcon} alt={''} />
            <h1>{title}</h1>
          </div>
          <h2>{description}</h2>
        </div>
      ))}
    </div>
  );
}
