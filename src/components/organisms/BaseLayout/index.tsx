import { Navigation } from "../../molecules/Navigation";
import styles from "./style.module.css";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const BaseLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};
