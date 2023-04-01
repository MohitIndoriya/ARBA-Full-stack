import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';

import Login from './Components/Login/Login';
import Carousel from './Components/Carousal/Carousal';
import Navbar from './Components/Navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNewProduct, getMyProducts, updateProduct } from './Redux/Actions/product.action';
import Singleproduct from './Components/SingleProduct/Singleproduct';
import Dialog from './Components/CreateProductDailog/CreateProductDailog';
const images = [
  "https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2", "https://picsum.photos/800/400?random=3", "https://picsum.photos/800/400?random=4", "https://picsum.photos/800/400?random=5"]
function App() {
  let p = useSelector(s => s.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateProduct({ title: "test product 2", price: 213, _id: "6425cd7d13caa2040db45040", image: "dummy.url", description: "test discription" }))
  }, [])
  console.log(p)
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />


      <Carousel images={images} />
      <Singleproduct />
      <Dialog />
    </div>
  );
}

export default App;
