"use client";

import { useState } from "react";
import styles from "./page.module.css";
import WorkCard from "@/app/_components/WorkCard";
import { works } from "@/app/_data/works";
import CategoryButton from "../_components/CategoryButton";
import ShowWork from "../_components/ShowWork";

type Work = {
    workName: string,
    pathName: string,
    description: string,
    link: string,
    category: string
};

export default function Page() {
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);
    const [category, setCategory] = useState<string>("all");
    const categories: string[] = ["all", "program", "design"]; //修正する(切り出し)

    return (
        <div className={styles.works}>
            <div className={styles.twoCols}>
                <div className={styles.colLeft}>
                    <div className={styles.leftContainer}>
                        <div className={styles.controllArea}>
                            <CategoryButton category={category} categories={categories} setCategory={setCategory} />
                        </div>
                        <div className={styles.viewArea}>
                            {selectedWork ? (
                                <ShowWork {...selectedWork} />
                            ) : (
                                <div className={styles.noSelect}>
                                    <span>Select<br></br>a Work<br></br>to Show<br></br>Here</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.colRight}>
                    {works.works
                    .filter((work: Work) => 
                        category === "all" || work.category === category
                    )
                    .map((work: Work, index: number) => (
                        <div key={index}>
                            <WorkCard
                                {...work}
                                onSelect={() => setSelectedWork(work)}
                                isSelected={selectedWork?.workName === work.workName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}