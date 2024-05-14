import styles from "./adresses-bar.module.scss";
import { Adress } from "../adress/adress.component";

export function AdressesBar() {
  return (
    <div className={styles.container}>
      <Adress
        title={"Petrópolis"}
        description={
          "Av. Cel. Lucas de Oliveira, 505 - sala 302 - Petrópolis, Porto Alegre - RS, 90440-011"
        }
      />
      <Adress
        title={"IGO Petrópolis"}
        description={
          "Av. Sen. Tarso Dutra, 10 - 3º andar - Petrópolis, Porto Alegre - RS, 90690-140"
        }
      />
      <Adress
        title={"IGO Canoas"}
        description={"R. Liberdade, 33 - Mal. Rondon, Canoas - RS, 92020-030"}
      />
      <Adress
        title={"Atendimento"}
        description={"De segunda à sexta das 12:00 às 18h00. (51)999999999"}
      />
    </div>
  );
}
