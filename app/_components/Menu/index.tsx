"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
    const pathname = usePathname();
    return (
        <nav className={styles.nav}>
            <ul className={styles.items}>
                <li className={cx(styles.item, {[styles.active]: pathname === "/profile"})}>
                    <Link href="/profile">Profile</Link>
                </li>
                <li className={cx(styles.item, {[styles.active]: pathname === "/works"})}>
                    <Link href="/works">Works</Link>
                </li>
                <li className={cx(styles.item, {[styles.active]: pathname === "/contact"})}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}