import styles from "./page.module.css";
import MyProfile from "../_components/MyProfile";
import MySkill from "../_components/MySkill";
import Title from "../_components/Title";

export default function Page() {
    return (
        <div className={styles.profile}>  
            <Title title="PROFILE" />
            <MyProfile />
            <Title title="SKILLS" />
            <MySkill />
        </div>
    );
}