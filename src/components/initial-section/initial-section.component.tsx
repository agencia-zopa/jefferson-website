"use client";
import { ScheduleAppointment } from "@/components/schedule-appointment/schedule-appointment.component";
import styles from "./initial-section.module.scss";
import { FrequentlyAskedQuestions } from "@/components/faq/faq.component";
import Image from "next/image";
import mouseIcon from "@public/mouse.svg";
import { useScrollDetection } from "@/hooks/use-scroll-detection";

export function InitialSection() {
  const isScrolled = useScrollDetection(100);

  return (
    <div className={styles.initialSectionContainer}>
      <div className={styles.initialSectionContent}>
        <span className={styles.doctorName}>Dr. Jefferson André Bauer</span>
        <span className={styles.doctorBio}>
          Otorrinolaringologista com mais de 5 anos de experiência especializado
          em Otologia Cirúrgica, Otologia Clínica, Otoneurologia.
        </span>
        <div className={styles.buttons}>
          <ScheduleAppointment />
          <FrequentlyAskedQuestions />
        </div>
      </div>
      <Image
        src={mouseIcon}
        alt={"Ícone de mouse"}
        className={`${styles.mouseIcon} ${isScrolled ? styles.inverted : ""}`}
      />
    </div>
  );
}
