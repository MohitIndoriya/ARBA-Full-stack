import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProducts } from '../../Redux/Actions/product.action'
import Singleproduct from '../SingleProduct/Singleproduct'

export default function Allproducts() {
    let products = useSelector((s) => s.product.data)
    console.log(products)
    let dispatch = useDispatch()
    useEffect(() => {

        dispatch(getMyProducts())
    }, [])
    return (
        <div style={{ height: "700px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "20px" }}>
            {products?.map((e) =>
                <Singleproduct {...e} />
            )

            }
        </div>
    )
}
