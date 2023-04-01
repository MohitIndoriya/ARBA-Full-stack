import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMyProducts } from '../../Redux/Actions/product.action'
import Singleproduct from '../SingleProduct/Singleproduct'

export default function Products() {
    let products = useSelector((s) => s.product.data)
    const navigate = useNavigate()
    console.log(products)
    let dispatch = useDispatch()
    useEffect(() => {

        dispatch(getMyProducts())
    }, [])
    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "20px" }}>
                {products?.map((e) =>
                    <Singleproduct {...e} />
                )


                }

            </div>
            <div style={{ margin: "200px" }}><button onClick={() => navigate("/Allproducts")}>See All Products</button></div></>

    )
}
