import React, { useEffect, useState } from 'react'
import styles from "../Login/Login.module.css"
import { useDispatch, useSelector, useStore } from "react-redux"
import { authLogin } from '../../Redux/Actions/auth.action'
import Carousel from '../Carousal/Carousal'
import { useNavigate } from 'react-router-dom'
let init = {

    userName: "",

    password: ""
}

export default function Login() {
    let [data, setdata] = useState(init)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let auth = useSelector((s) => s.auth.isAuth)
    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })

    }
    function handleSignup() {
        dispatch(authLogin(data))
        navigate()
    }
    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [auth])

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
                    <div>dont have an Account<button onClick={() => navigate("/signup")}>Signup</button></div>
                </div>
            </div>

        </div>
    )
}
