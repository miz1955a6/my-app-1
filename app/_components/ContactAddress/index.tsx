import styles from "./index.module.css";

export default function ContactAddress() {
    return (
        <div className={styles.contactAddress}>
            <dl>
                <div className={styles.dictItemWrapper}>
                    <dt>email</dt>
                    <dd>dammy@gmail.com_</dd>
                </div>
                <div className={styles.dictItemWrapper}>
                    <dt>github</dt>
                    <dd>dammy</dd>
                </div>
            </dl>
        </div>
    );
}