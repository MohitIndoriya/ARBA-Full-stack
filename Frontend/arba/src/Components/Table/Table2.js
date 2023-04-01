import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Redux/Actions/product.action'
import CreateProduct from '../CreateCategory/CreateProduct'
import EditProduct from '../CreateCategory/EditProduct'
import Dialog from '../CreateProductDailog/CreateProductDailog'
import styles from "../Table/Table.module.css"

export default function Table2({ arr }) {
    let dispatch = useDispatch()
    return (
        <div>
            <Dialog name="add new Product"><CreateProduct /></Dialog>
            <table className={styles.table}>
                <thead>
                    <th>Image</th>
                    <th> Name</th>
                    <th>price</th>
                    <th> Actions</th>

                </thead>
                <tbody>
                    {arr.map((e) => {

                        return (<tr className={styles.actirow}>   <td>{e.image}</td>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                            <td><Dialog name="edit"><EditProduct id={e._id} /></Dialog>/<button onClick={() => dispatch(deleteProduct(e._id))}>Delete</button></td>
                        </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
