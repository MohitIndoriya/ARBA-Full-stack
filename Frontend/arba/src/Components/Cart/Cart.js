import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../Redux/Actions/cart.action'
import Singleproduct from '../SingleProduct/Singleproduct'

export default function Cart() {
    let dispatch = useDispatch()
    let cart = useSelector(s => s.cart.carts)
    useEffect(() => {
        dispatch(getCart())
    }, [])
    console.log(cart)
    return (
        <div style={{ height: "700px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "20px", marginBottom: "20px" }}>
            {
                cart?.map((e) => <Singleproduct {...e.productId} />)
            }
        </div>
    )
}
