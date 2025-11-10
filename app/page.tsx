import Link from "next/link";
import styles from "./page.module.css";
import Card from "./_components/Card";
import Space from "./_components/Space";

export default function Home() {
  return (
    <div>
      <Space />
      <ul className={styles.cards}>
        <li>
          <Link href="/" className={styles.cardLink}>
            <Card
              title="PROFILE"
              theme="royalblue"
            />
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.cardLink}>
            <Card
              title="WORKS"
              theme="whitesmoke"
            />
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.cardLink}>
            <Card
              title="CONTACT"
              theme="darkslateblue"
            />
          </Link>
        </li>
      </ul>
      <Space />
    </div>
  );
}