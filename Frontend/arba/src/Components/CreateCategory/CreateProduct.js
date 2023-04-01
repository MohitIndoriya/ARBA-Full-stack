import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../../Redux/Actions/product.action'
import { UplodeFile } from '../clondary.js/uplode'
import styles from "../CreateProductDailog/CreateProductDailog.module.css"
let pro = {
    title: "",
    price: "",
    category: "",
    description: ""
}
export default function CreateProduct() {
    let categoryarray = useSelector(s => s.category.data)
    let [product, setproduct] = useState(pro)
    let [pic, setPic] = useState("")
    let dispatch = useDispatch()
    function handleInputs(e) {
        setproduct({ ...product, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addNewProduct({ ...product, image: pic }))
    }
    return (
        <div>
            <h2>Create Product</h2>
            <form>
                <div className={styles.formdata}> <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="title" value={product.title} onChange={handleInputs} /></div>
                <br />
                <div className={styles.formdata}>  <label>Price:</label>
                    <input name="price" type="text" value={product.price} onChange={handleInputs} /></div>
                <br />
                <select value={product.category} name="category" onChange={handleInputs}>
                    {
                        categoryarray?.map((e) => <option value={e._id}>{e.name}</option>)
                    }
                </select>

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
