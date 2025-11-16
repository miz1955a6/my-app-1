"use client";

import styles from "./index.module.css";
import Image from "next/image";
import cx from "classnames";
import { useState } from "react";

type Props = {
    "skillName": string,
    "pathName": string,
    "level": number,
    "description": string,
    "className"?: string
};

export default function Ball({skillName, pathName, level, description, className}: Props) {
    const [flag, setFlag] = useState<boolean>(false);
    const handleEnter = () => setFlag(true);
    const handleLeave = () => setFlag(false);
    return (
        <div className={cx(styles.ball, className)} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <Image
                src={"/" + pathName}
                alt={skillName}
                className={!flag ? styles.icon : styles.iconActive}
                width={100}
                height={100}
                priority
            />
            {flag && (
                <>
                    <div className={styles.skillName}>
                        <span>{skillName}</span>
                        <br></br>
                    </div>
                    <div className={styles.ballText}>
                        <span>{description}</span>
                    </div>
                </>
            )}
        </div>
    );
}