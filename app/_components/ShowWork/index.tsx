import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { zenOldMincho } from "@/app/fonts";
import cx from "classnames";

type Technology = {
    technologyName: string,
    technologyPath: string
}

type Work = {
    workName: string,
    pathName: string,
    description: string,
    link: string,
    category: string,
    technologies: Technology[]
};

export default function ShowWork({workName, pathName, description, link, category, technologies}: Work) {
    return (
        <div className={cx(styles.showWork, zenOldMincho.className)}>
            <div className={styles.workImage}>
                <Link href={link}>
                    <Image
                        src={"/" + pathName}
                        alt={workName}
                        className={styles.workImageStyle}
                        fill
                        priority
                    />
                </Link>
            </div>
            <div className={styles.workName}>
                {workName}
            </div>
            <div className={styles.technologies}>
                {technologies.map((tech) => (
                    <div key={tech.technologyName} className={styles.technologyImageWrapper}>
                        <Image
                            src={"/" + tech.technologyPath}
                            alt={tech.technologyName}
                            fill
                            className={styles.technologyImage}
                            priority
                        />
                    </div>
                ))}
            </div>
            <div className={styles.workDescription}>
                {description}
            </div>
        </div>
    );
}