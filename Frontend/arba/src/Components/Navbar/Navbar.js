import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
    let navigate = useNavigate()
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.rightItems}>
                <div className={styles.cart}>
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="Cart" />
                    <span className={styles.cartCounter}>0</span>
                </div>
                <div className={styles.profile}>
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Profile" />
                    <div className={styles.profileMenu}>
                        <ul>
                            <li onClick={() => navigate("/mystore")}>My store</li>
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
