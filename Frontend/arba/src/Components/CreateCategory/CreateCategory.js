import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCategory } from '../../Redux/Actions/category.action'
import { UplodeFile } from '../clondary.js/uplode'
import styles from "../CreateProductDailog/CreateProductDailog.module.css"
let cate = {
    name: "",
    slug: "",
}
export default function CreateCategory() {
    let [category, setcategory] = useState(cate)
    let [pic, setPic] = useState("")
    let dispatch = useDispatch()
    function handleInputs(e) {
        setcategory({ ...category, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addNewCategory({ ...category, image: pic }))
    }
    return (
        <div>
            <h2>Create Category</h2>
            <form>
                <div className={styles.formdata}> <label htmlFor="productName">Category Name:</label>
                    <input type="text" id="productName" name="name" value={category.name} onChange={handleInputs} /></div>
                <br />
                <div className={styles.formdata}>  <label>Slug:</label>
                    <input type="text" name="slug" value={category.slug} onChange={handleInputs} /></div>
                <br />

                <div className={styles.formdata}>  <label>Image:</label>
                    <input type="file" name="image" accept="image/*" onChange={(e) => UplodeFile(e.target.files[0], setPic)} /><br /></div>


                <button type="submit" onClick={handleSubmit}>Create Category</button>
            </form>
        </div>
    )
}
