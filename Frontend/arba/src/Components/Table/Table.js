import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCategory } from '../../Redux/Actions/category.action'
import CreateCategory from '../CreateCategory/CreateCategory'
import CreateProduct from '../CreateCategory/CreateProduct'
import EditCategory from '../CreateCategory/EditCategory'
import Dialog from '../CreateProductDailog/CreateProductDailog'
import styles from "../Table/Table.module.css"

export default function Table({ arr }) {
    let dispatch = useDispatch()
    return (
        <div >
            <Dialog name="add new Category"><CreateCategory /></Dialog>
            <table className={styles.table}>
                <thead>
                    <th>Image</th>
                    <th> Name</th>
                    <th>slug</th>
                    <th> Actions</th>

                </thead>
                <tbody>
                    {arr.map((e) => {

                        return (<tr className={styles.actirow}>   <td >{e.image}</td>
                            <td>{e.name}</td>
                            <td>{e.slug}</td>
                            <td><Dialog name="Edit"><EditCategory id={e._id} /></Dialog>/<button onClick={() => dispatch(deleteCategory(e._id))}>Delete</button></td>
                        </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
