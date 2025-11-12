import styles from "./index.module.css";
import Ball from "@/app/_components/Ball";
import { resume } from "@/app/_data/resume";

type Skill = {
    "skillName": string,
    "pathName": string,
    "level": number,
    "description": string
};

export default function MySkill() {
    return (
        <div className={styles.skill}>
            <div className={styles.balls}>
                {resume.skills.map(({ skillName, pathName, level, description }: Skill) => (
                    <Ball
                        className={styles.ball}
                        key={skillName}
                        skillName={skillName}
                        pathName={pathName}
                        level={level}
                        description={description}
                    />
                ))}
            </div>
        </div>
    );
}