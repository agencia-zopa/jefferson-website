import { Address } from '@/components/address/adress.component';

import styles from './adresses-bar.module.scss';

export function AddressesBar() {
  return (
    <div className={styles.container}>
      <Address
        title={'Petrópolis'}
        description={
          'Av. Cel. Lucas De Oliveira, 505 - Sala 302 - Petrópolis, Porto Alegre - RS, 90440-011'
        }
      />
      <Address
        title={'IGO Petrópolis'}
        description={
          'Av. Sen. Tarso Dutra, 10 - 3º Andar - Petrópolis, Porto Alegre - RS, 90690-140'
        }
      />
      <Address
        title={'IGO Canoas'}
        description={'R. Liberdade, 33 - Mal. Rondon, Canoas - RS, 92020-030'}
      />
      <Address
        title={'Atendimento'}
        description={'De Segunda À Sexta Das 12:00 às 18h00. (51)999999999'}
      />
    </div>
  );
}
