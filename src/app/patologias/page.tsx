import { PathologyCard } from '@/components/pathology-card/pathology-card.component';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <span>Patologias</span>
      </div>
      <div className={styles.cardsContainer}>
        <PathologyCard
          title={'Aplicação de corticoide intratimpânico'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={'/IMG_2646.jpg'}
        />
        <PathologyCard
          title={'Manobras de reposicionamento para VPPB'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
        <PathologyCard
          title={'Tubo de ventilação'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
        <PathologyCard
          title={'Timpanoplastia'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
        <PathologyCard
          title={'Estapedectomia'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={'/IMG_2646.jpg'}
        />
        <PathologyCard
          title={'Implante Coclear'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
        <PathologyCard
          title={'Próteses ancoradas no osso (BAHA, Ponto, etc)'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
        <PathologyCard
          title={'Próteses implantáveis'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imagePath={''}
        />
      </div>
    </div>
  );
}
