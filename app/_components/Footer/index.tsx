import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.cr}>©︎ Miz All Rights Reserved 2025</p>
        </footer>
    );
}