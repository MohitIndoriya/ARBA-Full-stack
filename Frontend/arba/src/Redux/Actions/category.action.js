import { ADDNEWPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETALLPRODUCTS } from "../ActionTypes/category.actiontype"

export const getCategory = () => async (dispatch) => {
    try {
        let res = await fetch("http://localhost:8080/category/", {
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
export const addNewCategory = (data) => async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/category/create`, {
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

export const updateCategory = (data) => async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/category/update/${data._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => res.json())
        return dispatch({ type: ADDNEWPRODUCT, payload: data })
    } catch (error) {
        console.log(error, "arr")
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/category/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "" + JSON.parse(localStorage.getItem("auth")).token
            }
        })
        return dispatch({ type: DELETEPRODUCT, payload: { _id: id } })
    } catch (error) {
        console.log(error, "arr")
    }
}