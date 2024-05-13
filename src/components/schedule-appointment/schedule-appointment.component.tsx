import commentIcon from "@public/comment-01.svg";
import Image from "next/image";
import styles from "./schedule-appointment.module.scss";

export function ScheduleAppointment() {
  return (
    <a className={styles.buttonContainer} href="#">
      <p className={styles.buttonText}>Agendar Consulta</p>{" "}
      <Image
        className={styles.buttonIcon}
        src={commentIcon}
        alt={"Ícone de comentário"}
      />
    </a>
  );
}
