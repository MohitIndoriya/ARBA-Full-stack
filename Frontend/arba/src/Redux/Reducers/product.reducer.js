import { GETALLPRODUCTS, EDITPRODUCT, DELETEPRODUCT, ADDNEWPRODUCT } from "../ActionTypes/product.actiontype";
const init = {
    data: [],
    isloading: false
}
export default function productReducer(state = init, { type, payload }) {
    switch (type) {
        case GETALLPRODUCTS:
            return {
                ...state, data: [...payload]
            }

        case EDITPRODUCT:
            let edited = state.data.map((e) => e._id == payload._id ? { ...e, ...payload } : e)
            return {
                ...state, data: [...edited]
            }
        case ADDNEWPRODUCT: return {
            ...state, data: [payload, ...data]
        }
        case DELETEPRODUCT:
            let deleted = state.data.filter((e) => e._id != payload._id)
            return {
                ...state, data: [...deleted]
            }
        default: return state
    }


}