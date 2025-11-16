import styles from "./page.module.css";
import ContactAddress from "../_components/ContactAddress";
import ContactForm from "../_components/ContactForm";

export default function Page() {
    return (
        <div className={styles.contact}>
            <div className={styles.addressWrapper}>
                <ContactAddress />
            </div>
            <div className={styles.or}><del>OR</del> (The form is currently under construction.)</div>
            <div className={styles.formWrapper}>
                <ContactForm />
            </div>
        </div>
    );
}