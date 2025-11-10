import Link from "next/link";
import styles from "./index.module.css";

export default function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href="/profile">プロフィール</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/works">作品</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/contact">コンタクト</Link>
                </li>
            </ul>
        </nav>
    );
}