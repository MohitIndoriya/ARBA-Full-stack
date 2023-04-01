import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';

import Login from './Components/Login/Login';
import Carousel from './Components/Carousal/Carousal';
import Navbar from './Components/Navbar/Navbar.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMyProducts } from './Redux/Actions/product.action';
import Singleproduct from './Components/SingleProduct/Singleproduct';
import Dialog from './Components/CreateProductDailog/CreateProductDailog';
const images = [
  "https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2", "https://picsum.photos/800/400?random=3", "https://picsum.photos/800/400?random=4", "https://picsum.photos/800/400?random=5"]
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyProducts())
  }, [])
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Login />
       */}
      <Navbar />
      <Carousel images={images} />
      <Singleproduct />
      <Dialog />
    </div>
  );
}

export default App;
