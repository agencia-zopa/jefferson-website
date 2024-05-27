import styles from './presentation-section.module.scss';

export function PresentationSection() {
  return (
    <div className={styles.container} id={'apresentacao'}>
      <div className={styles.imageContainer} />
      <div className={styles.contentContainer}>
        <div className={styles.title}>Dr. Jefferson André Bauer</div>
        <div className={styles.divider} />
        <div className={styles.text}>
          Otorrinolaringologista com mais de 5 anos de experiência especializado
          em Otologia Cirúrgica, Otologia Clínica, Otoneurologia. O meu número
          de registro profissional: 35975.
        </div>
        <div className={styles.divider} />
        <div className={styles.title}>Formação</div>
        <ul className={styles.text}>
          <li>
            - Mestrado em Cirurgia, Universidade Federal do Rio Grande do Sul,
            2016
          </li>
          <li>
            - Fellowship Otologia Clínica e Cirúrgica, Hospital Mãe de Deus,
            2015
          </li>
          <li>
            - Graduação em Medicina, Universidade Federal do Rio Grande do Sul,
            2011
          </li>
          <li>
            - Residência Médica em Otorrinolaringologia, Hospital de Clínicas de
            Porto Alegre, 2014
          </li>
        </ul>
      </div>
    </div>
  );
}
