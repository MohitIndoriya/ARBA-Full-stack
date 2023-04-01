import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Dialog from '../CreateProductDailog/CreateProductDailog';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../Redux/Actions/auth.action';
const Navbar = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let cart = useSelector(s => s.cart.carts)
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={() => navigate("/")} >Logo</div>
            <div className={styles.rightItems}>
                <div className={styles.cart} onClick={() => navigate("/cart")}>
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="Cart" />
                    <span className={styles.cartCounter}>{cart.length}</span>
                </div>
                <div className={styles.profile}>
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Profile" />
                    <div className={styles.profileMenu}>
                        <ul>
                            <li onClick={() => navigate("/mystore")}>My store</li>
                            <li >Profile</li>
                            <li onClick={() => dispatch(authLogout())}>Logout</li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
