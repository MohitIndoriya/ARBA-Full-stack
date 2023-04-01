import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../SingleProduct/Singleproduct.module.css"
import { addProductToCart, updateProductInCart } from '../../Redux/Actions/cart.action'
export default function Singleproduct({ image, title, price, discription, _id }) {
    let [data, setData] = useState({})
    let cart = useSelector(s => s.cart.carts)
    useEffect(() => {
        let res = cart.find((e) => e.productId._id == _id)
        if (res) {
            setData({ ...res })
        }
    }, [cart])
    console.log(data)
    const dispatch = useDispatch()
    return (
        <div className={styles.mainbox}>
            <div className={styles.firstbox}> <img src={image} />
            </div>
            <div className={styles.secondbox}>
                <h3>{title}</h3>
                <p>{discription}</p>
                <h1>Rs. {price}</h1>
                {!data.quantity && <button onClick={() => dispatch(addProductToCart(_id))} >Add to cart</button>}
                {
                    data.quantity && <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <button
                            disabled={data.quantity == 1 ? true : false}
                            onClick={() => dispatch(updateProductInCart(data._id, data.quantity - 1))}
                        >-</button>
                        <button>{data.quantity}</button>
                        <button
                            onClick={() => dispatch(updateProductInCart(data._id, data.quantity + 1))}
                        >+</button>
                    </div>
                }
            </div>

        </div>
    )
}
