import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Quizma</h1>
      <p>Hvor god er du på norske slangord og uttrykk? Test deg selv!</p>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Link href="/slang">
              <a href="" className={styles.card}>
                <h2>Slangord &rarr;</h2>
                <p>Ungdommelige ord og uttrykk</p>
              </a>
            </Link>
            <Link href="/forkortelser">
              <a href="" className={styles.card}>
                <h2>Forkortelser &rarr;</h2>
                <p>Kortform av et ord</p>
              </a>
            </Link>
            <Link href="/idiomer">
              <a href="" className={styles.card}>
                <h2>Idiomer &rarr;</h2>
                <p>Uttrykk som har en betydning som ikke kan utledes direkte</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
