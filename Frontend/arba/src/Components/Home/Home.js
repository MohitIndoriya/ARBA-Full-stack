import React, { useEffect } from 'react'
import Carousel from '../Carousal/Carousal'
import Products from '../Products/Products'
import styles from "../Home/Home.module.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let auth = useSelector((s) => s.auth.isAuth)
    console.log(auth);
    let navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
    }, [auth])

    return (
        <div className={styles.container}>
            {/* <Carousel /> */}
            <div className={styles.product}><Products /> </div>
        </div>
    )
}
