import { Card } from "../card/card.component";
import styles from "./pathology-section.module.scss";

export function PathologySection() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Patologias</span>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardsContainer}>
          <Card
            title={"Manobras de reposicionamento para VPPB"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?"
            }
            imagePath={"/IMG_2646.jpg"}
          />
          <Card
            title={"Manobras de reposicionamento para VPPB"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?"
            }
            imagePath={""}
          />
          <Card
            title={"Manobras de reposicionamento para VPPB"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?"
            }
            imagePath={""}
          />
          <Card
            title={"Manobras de reposicionamento para VPPB"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?"
            }
            imagePath={""}
          />
          <Card
            title={"Manobras de reposicionamento para VPPB"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?"
            }
            imagePath={""}
          />
        </div>
      </div>
      <a className={styles.seeAll} href="#">
        <p>Veja todas -&gt;</p>
      </a>
    </div>
  );
}
