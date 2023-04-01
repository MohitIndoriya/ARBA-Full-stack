import React from 'react'
import Carousel from '../Carousal/Carousal'
import Products from '../Products/Products'
import styles from "../Home/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            {/* <Carousel /> */}
            <div className={styles.product}><Products /> </div>
        </div>
    )
}
