import React, { useState } from 'react'
import styles from "../Signup/Signup.module.css"
import { useDispatch } from "react-redux"
import { authRegister } from '../../Redux/Actions/auth.action'
let init = {
    fullName: "",
    userName: "",
    email: "",
    password: ""
}
export default function Signup() {
    let [data, setdata] = useState(init)
    let dispatch = useDispatch()
    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    function handleSignup() {
        dispatch(authRegister(data))
    }

    return (
        <div className={styles.container}>
            <div>
                <img src="https://uploads-ssl.webflow.com/611034d8521d641c2843cb9b/621d7cf6da37a59c739db30b_15%20Inbound%20Templates%20Cover.png" />
            </div>
            <div className={styles.signup}>
                <h1>Our App</h1>
                <div className={styles.signupform}>
                    <input type="text" placeholder="Enter Fullname" name="fullName" value={data.fullName} onChange={handleInputs} />
                    <input type="test" placeholder="Enter username" name="userName" value={data.userName} onChange={handleInputs} />
                    <input type="email" placeholder='Enter Email' name="email" value={data.email} onChange={handleInputs} />
                    <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={handleInputs} />
                    <button onClick={handleSignup}>Signup</button>
                </div>
            </div>
        </div>
    )
}
