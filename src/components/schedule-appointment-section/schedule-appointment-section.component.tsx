import styles from "./schedule-appointment-section.module.scss";
import {GenericButton} from "@/components/generic-button/generic-button.component";
import commentIcon from '@public/comment-01.svg';

export function ScheduleAppointmentSection() {
  return <div className={styles.container}>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>Marque sua Consulta!</h1>
      <p className={styles.text}>
        Otorrinolaringologista com mais de 5 anos de experiência especializado em Otologia Cirúrgica, Otologia Clínica, Otoneurologia.
      </p>
      <GenericButton text="Agendar Consulta" backgroundColor="#0476F7" textColor="white" iconSrc={commentIcon} />
    </div>
    <div className={styles.imageContainer}></div>
  </div>
}
