import styles from "./index.module.css";
import cx from "classnames";
import Image from "next/image";

type Work = {
    workName: string,
    pathName: string,
    description: string,
    link: string,
    category: string
};

type Props = Work & {
    onSelect?: () => void,
    isSelected?: boolean
};

export default function WorkCard({workName, pathName, description, link, category, onSelect, isSelected }: Props) {
    return (
        <div className={cx(styles.workCard, {[styles.selected]: isSelected})} onClick={onSelect}>
            <Image
                src={"/" + pathName}
                alt={workName}
                fill
                priority
            />
        </div>
    );
}