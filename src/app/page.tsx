import { ScheduleAppointment } from "@/components/schedule-appointment/schedule-appointment.component";
import styles from "./page.module.scss";
import { FrequentlyAskedQuestions } from "@/components/faq/faq.component";
import { AdressesBar } from "@/components/adresses-bar/adresses-bar.component";

export default function Home() {
  return (
    <>
      <AdressesBar />
      <div className={styles.initialSectionContainer}>
        <div className={styles.initialSectionContent}>
          <span className={styles.doctorName}>Dr. Jefferson André Bauer</span>
          <span className={styles.doctorBio}>
            Otorrinolaringologista com mais de 5 anos de experiência
            especializado em Otologia Cirúrgica, Otologia Clínica,
            Otoneurologia.
          </span>
          <div className={styles.buttons}>
            <ScheduleAppointment />
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>
    </>
  );
}
