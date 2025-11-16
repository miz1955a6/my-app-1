import styles from "./index.module.css";
import Image from "next/image";

type Work = {
    workName: string,
    pathName: string,
    description: string,
    link: string,
    category: string
};

export default function ShowWork({workName, pathName, description, link, category}: Work) {
    return (
        <div className={styles.showWork}>
            <div className={styles.workImage}>
                <Image
                    src={"/" + pathName}
                    alt={workName}
                    fill
                    priority
                />
            </div>
            <div className={styles.workName}>
                {workName}
            </div>
            <div className={styles.workDescription}>
                {description}
            </div>
        </div>
    );
}