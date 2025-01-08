import styles from "./page.module.css";
import Popular from "@/components/Porpular/Popular";
import Genres from "@/components/Genres/Genres";

export const revalidate = 86400

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
