import styles from "./page.module.css";
import ContactAddress from "../_components/ContactAddress";
import ContactGoogleForm from "../_components/ContactGoogleForm";

export default function Page() {
    return (
        <div className={styles.contact}>
            <div className={styles.addressWrapper}>
                <ContactAddress />
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.formWrapper}>
                <ContactGoogleForm />
            </div>
        </div>
    );
}