import ProfileCard from "../ProfileCard";
import styles from "./index.module.css";
import Image from "next/image";
import { resume } from "@/app/_data/resume";

type Qualification = {
    qualificationName: string;
    date: string,
};

type Profile = {
    name: string,
    degree: string,
    biography: string,
    photoName: string,
    qualifications: Qualification[]
}

export default function MyProfile() {
    const { name, degree, biography, photoName, qualifications }: Profile = resume;
    const conQualification:string = qualifications.map(
        ({ qualificationName, date }: Qualification) => (`${qualificationName}`)
    ).join(" ");

    return (
        <div className={styles.profile}>
            <Image
                src={"/" + photoName}
                alt={photoName}
                className={styles.myPhoto}
                width={150}
                height={150}
                priority
            />
            <ProfileCard name="name" description={name} />
            <ProfileCard name="degree" description={degree} />
            <ProfileCard name="biography" description={biography} />
            <ProfileCard name="qualifications" description={conQualification} />
        </div>
    );
}