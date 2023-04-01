import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';

import Login from './Components/Login/Login';
import Carousel from './Components/Carousal/Carousal';
import Navbar from './Components/Navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNewProduct, deleteProduct, getMyProducts, updateProduct } from './Redux/Actions/product.action';
import Singleproduct from './Components/SingleProduct/Singleproduct';
import Dialog from './Components/CreateProductDailog/CreateProductDailog';
import { addNewCategory, deleteCategory, getCategory, updateCategory } from './Redux/Actions/category.action';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Mystore from './Components/MyStore/Mystore';
import Products from './Components/Products/Products';
import Allproducts from './Components/AllProducts/Allproducts';
const images = [
  "https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2", "https://picsum.photos/800/400?random=3", "https://picsum.photos/800/400?random=4", "https://picsum.photos/800/400?random=5"]
function App() {
  let p = useSelector(s => s.category)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
    dispatch(deleteCategory("6427c5d60a2e1d4f20def1b6"))
  }, [])
  console.log(p)
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Cart />} />
        <Route path="/mystore" element={<Mystore />} />
        <Route path="/Allproducts" element={<Allproducts />} />

      </Routes>




    </div>
  );
}

export default App;
