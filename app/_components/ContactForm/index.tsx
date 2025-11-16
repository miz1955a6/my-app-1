import styles from "./index.module.css";

export default function ContactForm() {
    return (
        <div className={styles.contactForm}>
            <form action="#">
                <div className={styles.contactFormInput}>
                    <label htmlFor="contactFormName"><span className={styles.required}>必須</span>お名前</label>
                    <br />
                    <input type="text" id="contactFormName" name="contactFormName" required />
                </div>
                <div className={styles.contactFormInput}>
                    <label htmlFor="contactFormEmail"><span className={styles.required}>必須</span>メールアドレス</label>
                    <br />
                    <input type="email" id="contactFormEmail" name="contactFormEmail" required />
                </div>
                <div className={styles.contactFormInput}>
                    <label htmlFor="contactFormSubject"><span className={styles.required}>必須</span>タイトル</label>
                    <br />
                    <input type="text" id="contactFormSubject" name="contactFormSubject" required />
                </div>
                <div className={styles.contactFormTextarea}>
                    <label htmlFor="contactFormMessage"><span className={styles.required}>必須</span>お問い合わせ内容</label>
                    <br />
                    <textarea id="contactFormMessage" name="contactFormMessage" required></textarea>
                </div>
                <div className={styles.contactFormSubmit}>
                    <button type="submit">送信</button>
                </div>
            </form>
        </div>
    );
}