import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "../ActionTypes/cart.actiontype";

export const getCart = () => async (dispatch) => {

    try {
        dispatch({ type: GET_CART_REQUEST });
        let res = await fetch(`http://localhost:8080/cart`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({
            type: GET_CART_FAILURE,
        });
    }
}

export const addProductToCart = (id) => async (dispatch) => {

    try {
        dispatch({ type: ADD_TO_CART_REQUEST });
        let cart = { productId: id, quantity: 1 }
        let res = await fetch(`http://localhost:8080/cart`, {
            method: "POST",
            body: JSON.stringify(cart),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        let ress = await fetch(`http://localhost:8080/cart`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        dispatch({ type: GET_CART_SUCCESS, payload: ress.data });
        return dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: {
                newCartItem: res.data,
                message: "item added successfully"
            }
        });

    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAILURE,
            payload: { message: error.message }
        });
    }
}

export const updateProductInCart = (id, quantity) => async (dispatch) => {

    try {
        dispatch({ type: UPDATE_CART_REQUEST });
        let res = await fetch(`http://localhost:8080/cart/${id}`, {
            method: "PUT",
            body: JSON.stringify(quantity),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        dispatch({
            type: UPDATE_CART_SUCCESS,

            payload: {
                updatedItem: res.data,
                message: "updated"
            }
        });
    } catch (error) {

        dispatch({
            type: UPDATE_CART_FAILURE,
            Authorization: { message: error.message }
        });
    }
}




export const removeProductFromCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_REQUEST });
        let res = await fetch(`http://localhost:8080/cart/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())

        dispatch({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: {
                id,
                message: res.data.message
            }
        });

    } catch (error) {
        dispatch({
            type: REMOVE_FROM_CART_FAILURE,
            payload: { message: error.message }
        });
    }
}