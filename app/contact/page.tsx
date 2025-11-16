import styles from "./page.module.css";
import ContactAddress from "../_components/ContactAddress";
import ContactForm from "../_components/ContactForm";

export default function Page() {
    return (
        <div className={styles.contact}>
            <div className={styles.addressWrapper}>
                <ContactAddress />
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.formWrapper}>
                <ContactForm />
            </div>
        </div>
    );
}