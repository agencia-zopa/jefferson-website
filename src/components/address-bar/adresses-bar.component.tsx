import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';

import styles from './adresses-bar.module.scss';

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

export function AddressBar() {
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
