import React, { useState } from "react";
import styles from "../CreateProductDailog/CreateProductDailog.module.css";

function Dialog() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={handleOpen}>Open Dialog</button>
            {isOpen && (
                <dialog className={styles.dialog} open={isOpen}>
                    <div className={styles.dialogContent}>
                        <h2>Create Product</h2>
                        <form>
                            <div className={styles.formdata}> <label htmlFor="productName">Product Name:</label>
                                <input type="text" id="productName" name="productName" /></div>
                            <br />
                            <div className={styles.formdata}>  <label>Price:</label>
                                <input name="price" type="text" /></div>
                            <br />
                            <div className={styles.formdata}>  <label>Image:</label>
                                <input type="file" /><br /></div>
                            <div className={styles.formdata}>  <label htmlFor="productDescription">Product Description:</label>
                                <textarea
                                    id="productDescription"
                                    name="productDescription"
                                ></textarea></div>
                            <br />
                            <button type="submit">Create Product</button>
                        </form>
                        <button onClick={handleClose}>Close Dialog</button>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default Dialog;
