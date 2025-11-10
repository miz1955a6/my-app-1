import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/*
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/profile">プロフィール</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/skill">スキル</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/work">作品</Link>
                    </li>
                </ul>
            </nav>
            */}
            <p className={styles.cr}>©︎ TEST All Rights Reserved 2025</p>
        </footer>
    );
}