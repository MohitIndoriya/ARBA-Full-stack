import React, { useState } from 'react'
import styles from "../Login/Login.module.css"
import { useDispatch } from "react-redux"
import { authLogin } from '../../Redux/Actions/auth.action'
import Carousel from '../Carousal/Carousal'
let init = {

    userName: "",

    password: ""
}

export default function Login() {
    let [data, setdata] = useState(init)
    let dispatch = useDispatch()
    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    function handleSignup() {
        dispatch(authLogin(data))
    }

    return (
        <div className={styles.container}>
            <div>
                <img src="https://uploads-ssl.webflow.com/611034d8521d641c2843cb9b/621d7cf6da37a59c739db30b_15%20Inbound%20Templates%20Cover.png" />
            </div>
            <div className={styles.signup}>
                <h1>Our App</h1>
                <div className={styles.signupform}>

                    <input type="test" placeholder="Enter username" name="userName" value={data.userName} onChange={handleInputs} />

                    <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={handleInputs} />
                    <button onClick={handleSignup}>Login</button>
                </div>
            </div>

        </div>
    )
}
