import React from 'react'
import { useDispatch } from 'react-redux'
import styles from "../SingleProduct/Singleproduct.module.css"
export default function Singleproduct({ image, title, price, discription }) {
    const dispatch = useDispatch()
    return (
        <div className={styles.mainbox}>
            <div className={styles.firstbox}> <img src={image} />
            </div>
            <div className={styles.secondbox}>
                <h3>{title}</h3>
                <p>{discription}</p>
                <h1>Rs. {price}</h1>
                <button >Add to cart</button>
            </div>

        </div>
    )
}
