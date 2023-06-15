import { Heading } from "@/components/heading/heading";
import style from "./index.module.sass";
import { Income } from "@/modules/income/income";
import { Wallet } from "@/modules/wallet/wallet";
import { Statistic } from "@/modules/statistic/statistic";
import { Transaction } from "@/modules/transaction/transaction";
import { Transfer } from "@/modules/transfer/transfer";

export default function Home() {
  return (
    <section className={style.main}>
      <Heading />
      <div className={style.container}>
        <div className={style.left}>
          <Income />
          <Wallet />
          <Statistic />
        </div>
        <div className={style.right}>
          <Transaction />
          <Transfer />
        </div>
      </div>
    </section>
  );
}
