import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../../Redux/Actions/product.action'
import { UplodeFile } from '../clondary.js/uplode'
import styles from "../CreateProductDailog/CreateProductDailog.module.css"
let pro = {
    fullName: "",

}
export default function UpdateProfile() {
    //let categoryarray = useSelector(s => s.category.data)
    let [product, setproduct] = useState(pro)
    let [pic, setPic] = useState("")
    let dispatch = useDispatch()
    function handleInputs(e) {
        setproduct({ ...product, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(({ ...product, avatar: pic }))
    }
    return (
        <div>
            <h2>Create Product</h2>
            <form>
                <div className={styles.formdata}> <label htmlFor="productName">Full Name:</label>
                    <input type="text" id="productName" name="fullName" value={product.fullName} onChange={handleInputs} /></div>
                <br />



                <div className={styles.formdata}>  <label>Image:</label>
                    <input type="file" name="image" onChange={(e) => UplodeFile(e.target.files[0], setPic)} /><br /></div>
                <div className={styles.formdata}>  <label htmlFor="productDescription">Product Description:</label>
                    <textarea
                        id="productDescription"
                        name="description"
                        value={product.description}
                        onChange={handleInputs}
                    ></textarea ></div>
                <br />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Create Product</button>
            </form>
        </div>
    )
}
