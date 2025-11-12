import styles from "./index.module.css";
import Space from "@/app/_components/Space";

type Props = {
    title: string,
};

export default function Title({ title } : Props) {
    return (
        <div className={styles.title}>
            <h1 className={styles.titleName}>{title}</h1>
            {/*<hr className={styles.hrStyle}></hr>*/}
            <Space />
        </div>
    );
}