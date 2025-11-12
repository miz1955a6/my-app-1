import styles from "./index.module.css";

type Props = {
    name: string,
    description: string
}

export default function ProfileCard({name, description}: Props) {
    return (
        <div className={styles.profileCard}>
            <span className={styles.profileName}>{name.toUpperCase()}</span>
            <br></br>
            <span>{description}</span>
        </div>
    );
}