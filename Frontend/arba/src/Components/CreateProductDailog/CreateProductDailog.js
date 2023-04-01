import React, { Children, useState } from "react";
import styles from "../CreateProductDailog/CreateProductDailog.module.css";

function Dialog({ children, name }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={handleOpen}>{name}</button>
            {isOpen && (
                <dialog className={styles.dialog} open={isOpen}>
                    <div className={styles.dialogContent}>
                        {children}
                        <button onClick={handleClose}>Close Dialog</button>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default Dialog;
