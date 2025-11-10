import cx from "classnames";
import styles from "./index.module.css";

type Theme = "royalblue" | "whitesmoke" | "darkslateblue";

type Props = {
    title: string;
    theme: Theme;
};

export default function Card({ title, theme }: Props) {
    return (
        <div className={cx(styles.card, styles[theme])}>
            <div className={styles.inner}>
                {Array.from(title).map((c, i) => (
                    <div key={i}>
                        {[...Array(i)].map((_, j) =>
                            <span key={j}>&nbsp;</span>
                        )}
                        <span>{c}</span>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}