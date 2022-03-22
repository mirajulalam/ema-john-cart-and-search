import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 10 / 100).toFixed(2));
    const grandtotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandtotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;