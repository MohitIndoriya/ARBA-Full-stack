import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../Redux/Actions/category.action'
import { getMyProducts } from '../../Redux/Actions/product.action'
import Table from '../Table/Table'
import Table2 from '../Table/Table2'

export default function Mystore() {
    let [cat, setcat] = useState(true)
    const dispatch = useDispatch()
    const catgory = useSelector(s => s.category.data)
    const Products = useSelector(s => s.product.data)
    useEffect(() => {
        dispatch(getMyProducts())
        dispatch(getCategory())
    }, [])
    return (
        <div>

            <div>
                <button onClick={() => setcat(true)}>Category</button>
                <button onClick={() => setcat(false)}>Products</button>
            </div>

            <div>
                {

                    cat && <Table arr={catgory} />

                }
                {
                    !cat && <Table2 arr={Products} />
                }
            </div>
        </div>
    )
}
