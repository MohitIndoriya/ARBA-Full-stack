import { ADDNEWPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETALLPRODUCTS } from "../ActionTypes/product.actiontype"

export const getMyProducts = () => async (dispatch) => {
    try {
        let res = await fetch("http://localhost:8080/product/myproduct", {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        return dispatch({ type: GETALLPRODUCTS, payload: res })
    } catch (error) {
        console.log(error, "arr")
    }
}
export const addNewProduct = (data) => async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/product/addproduct/${data.category}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        return dispatch({ type: ADDNEWPRODUCT, payload: res })
    } catch (error) {
        console.log(error, "arr")
    }
}

export const updateProduct = (data) => async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/product/update/${data._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        console.log(res, "res")
        return dispatch({ type: ADDNEWPRODUCT, payload: data })
    } catch (error) {
        console.log(error, "arr")
    }
}