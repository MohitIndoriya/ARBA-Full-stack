import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCategory, updateCategory } from '../../Redux/Actions/category.action'
import { UplodeFile } from '../clondary.js/uplode'
import styles from "../CreateProductDailog/CreateProductDailog.module.css"
let cate = {
    name: "",
    slug: "",
}
export default function EditCategory({ id }) {
    let [category, setcategory] = useState(cate)
    let [pic, setPic] = useState("")
    let dispatch = useDispatch()
    function handleInputs(e) {
        setcategory({ ...category, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateCategory({ ...category, image: pic, _id: id }))
    }
    return (
        <div>
            <h2>Edit  Category</h2>
            <form>
                <div className={styles.formdata}> <label htmlFor="productName">Category Name:</label>
                    <input type="text" id="productName" name="name" onChange={handleInputs} /></div>
                <br />
                <div className={styles.formdata}>  <label>Slug:</label>
                    <input name="slug" type="text" onChange={handleInputs} /></div>
                <br />

                <div className={styles.formdata}>  <label>Image:</label>
                    <input type="file" accept="image/*" onChange={(e) => UplodeFile(e.target.files[0], setPic)} /><br /></div>


                <button type="submit" onClick={handleSubmit}>Edit Category</button>
            </form>
        </div>
    )
}
