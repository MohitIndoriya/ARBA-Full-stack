import { ADDNEWPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETALLPRODUCTS } from "../ActionTypes/product.actiontype"

export const getMyProducts = () => async (dispatch) => {
    try {
        let res = await fetch("http:localhost:8080/product/myproducts", {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": JSON.parse(localStorage.getItem("auth")).token
            }
        }).then((res) => console.log(res.json()))

    } catch (error) {
        console.log(error, "arr")
    }
}