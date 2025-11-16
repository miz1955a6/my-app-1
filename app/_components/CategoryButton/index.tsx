"use client";

import styles from "./index.module.css";

type Props = {
    category: string,
    categories: string[],
    setCategory: (value: string) => void
};

export default function CategoryButton({ category, categories, setCategory}: Props) {
    return (
        <div className={styles.categoryRadio}>
            {categories.map((item) => (
                <div key={item} className={styles.radioItem}>
                    <input
                        type="radio"
                        name={item}
                        id={item}
                        value={item}
                        checked={category === item }
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <label htmlFor={item}>{item.toUpperCase()}</label>
                </div>
            ))}
        </div>
    );
}