import styles from "./index.module.css";
import Image from "next/image";

export default function ContactAddress() {
    return (
        <div className={styles.contactAddress}>
            <dl>
                <div className={styles.dictItemWrapper}>
                    <dt>
                        <Image
                            src={"/email.svg"}
                            alt={"email icon"}
                            className={styles.emailIcon}
                            width={25}
                            height={25}
                            priority
                        />
                    </dt>
                    <dd>miz1955a6 at gmail.com</dd>
                </div>
                <div className={styles.dictItemWrapper}>
                    <dt>
                        <Image
                            src={"/github.svg"}
                            alt={"github icon"}
                            className={styles.githubIcon}
                            width={25}
                            height={25}
                            priority
                        />
                    </dt>
                    <dd>miz1955a6</dd>
                </div>
            </dl>
        </div>
    );
}