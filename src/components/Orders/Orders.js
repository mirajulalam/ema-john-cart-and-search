import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReaviewItem from '../ReaviewItem/ReaviewItem';
import useProducts from './../../hooks/useProducts';
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="reaview-item-container">
                {
                    cart.map(product => <ReaviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReaviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')} className='btn-checkout'>Proceed Shipping <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;