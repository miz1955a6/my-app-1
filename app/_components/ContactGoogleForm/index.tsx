"use client";

import styles from "./index.module.css";
import { useState, useRef } from "react";

export default function ContactGoogleForm() {
    const [flag, setFlag] = useState<boolean>(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const isSubmitRef = useRef(false);
    const handleSubmit = () => {
        isSubmitRef.current = true;
    };
    const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        if (!iframe || !isSubmitRef.current) return;
        isSubmitRef.current = false;
        setFlag(true);
    };
    return (
        <>
        {!flag && (
            <div className={styles.contactForm}>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScOzFDLBpMjpmbGyppixJhIo3sx1lvOAeq82gr_4YNi0ndHcw/formResponse" method="POST" id="mG61Hd" target="hiddenIframe" onSubmit={handleSubmit}>
                    <div className={styles.contactFormInput}>
                        <label htmlFor="contactFormName"><span className={styles.required}>必須</span>お名前</label>
                        <br />
                        <input type="text" id="contactFormName" name="entry.533756179" required />
                    </div>
                    <div className={styles.contactFormInput}>
                        <label htmlFor="contactFormEmail"><span className={styles.required}>必須</span>メールアドレス</label>
                        <br />
                        <input type="email" id="contactFormEmail" name="entry.778109615" required />
                    </div>
                    <div className={styles.contactFormInput}>
                        <label htmlFor="contactFormSubject"><span className={styles.required}>必須</span>タイトル</label>
                        <br />
                        <input type="text" id="contactFormSubject" name="entry.2116250468" required />
                    </div>
                    <div className={styles.contactFormTextarea}>
                        <label htmlFor="contactFormMessage"><span className={styles.required}>必須</span>お問い合わせ内容</label>
                        <br />
                        <textarea id="contactFormMessage" name="entry.942193306" required></textarea>
                    </div>
                    <div className={styles.contactFormSubmit}>
                        <button type="submit">送信</button>
                    </div>
                    <iframe name="hiddenIframe" id="hiddenIframe" ref={iframeRef} className={styles.iframe} onLoad={handleIframeLoad}></iframe>
                </form>
            </div>
        )}
        {flag && (
            <div className={styles.thanks}>
                <div>Thanks!</div>
            </div>
        )}
        </>
    );
}