"use client";
import styles from "./navbar.module.scss";
import Image from "next/image";
import logoClinica from "@public/logo_clinica_otorrino-4.png";
import pipe from "@public/divider.png";
import { useState } from "react";
import { ScheduleAppointment } from "../schedule-appointment/schedule-appointment.component";

export function Navbar() {
  const [selectedOption, setSelectedOption] = useState("apresentacao");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.about}>
        <Image src={logoClinica} alt={"Logotipo da cliníca"} />
        <p className={styles.doctorName}>
          Dr. Jefferson
          <br />
          André Bauer
        </p>
        <Image src={pipe} alt="" className={styles.pipe} />
        <div className={styles.doctorInfo}>
          <p className={styles.specialization}> Otorrino </p>
          <p className={styles.crm}>CRM RS 35975</p>
          <p className={styles.rqe}>RQE Nº: 27603</p>
        </div>
      </div>
      <div className={styles.navOptions}>
        <a
          className={`${styles.navItem} ${
            selectedOption === "apresentacao" ? styles.selected : ""
          }`}
          href="#"
          onClick={() => handleOptionClick("apresentacao")}
        >
          Apresentação
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === "doencas" ? styles.selected : ""
          }`}
          href="#"
          onClick={() => handleOptionClick("doencas")}
        >
          Doenças
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === "patologias" ? styles.selected : ""
          }`}
          href="#"
          onClick={() => handleOptionClick("patologias")}
        >
          Patologias
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === "avaliacoes" ? styles.selected : ""
          }`}
          href="#"
          onClick={() => handleOptionClick("avaliacoes")}
        >
          Avaliações
        </a>
        <a
          className={`${styles.navItem} ${
            selectedOption === "duvidas" ? styles.selected : ""
          }`}
          href="#"
          onClick={() => handleOptionClick("duvidas")}
        >
          Dúvidas
        </a>
      </div>
      <div>
        <ScheduleAppointment />
      </div>
    </nav>
  );
}
