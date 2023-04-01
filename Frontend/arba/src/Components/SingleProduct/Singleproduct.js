import React from 'react'
import styles from "../SingleProduct/Singleproduct.module.css"
export default function Singleproduct() {
    return (
        <div className={styles.mainbox}>
            <div className={styles.firstbox}> <img src="https://assets.codepen.io/1077685/webp-format-nature-lossyj.jpg" />
            </div>
            <div className={styles.secondbox}>
                <h3>Product</h3>
                <p>llorem</p>
                <h1>Rs. 100</h1>
                <button>Add to cart</button>
            </div>

        </div>
    )
}
