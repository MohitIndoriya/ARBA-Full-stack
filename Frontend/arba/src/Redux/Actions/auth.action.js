import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../ActionTypes/auth.actiontype";



export const authRegister = (data) => async (dispatch) => {

    try {
        dispatch({ type: AUTH_LOGIN_REQUEST });

        const res = await fetch(`http://localhost:8080/user/signup`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let da = await res.json();
        console.log(da);
        alert("Account Created")
        // data.navigate("/")
        return dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: { ...da },
        });
    } catch (error) {
        alert("Something went wrong")
        return dispatch({
            type: AUTH_LOGIN_FAILURE,
            payload: {
                message: error.response.data,
            },
        });
    }
}


export const authLogin = (data) => async (dispatch) => {
    try {

        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await fetch(`http://localhost:8080/user/login`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let logindata = await res.json()
        console.log(logindata)
        alert("Login Succesfull")
        return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: { ...logindata } });
    } catch (error) {
        alert("invalid credentials")
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error } });
    }
}

export const authLogout = () => (dispatch) => {
    console.log("yes")
    return dispatch({ type: AUTH_LOGOUT });
}