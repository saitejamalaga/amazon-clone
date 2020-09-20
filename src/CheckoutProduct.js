import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
     // eslint-disable-next-line   
    const [basket, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        store.addNotification({
            title: title,
            message: "Removed from Cart",
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
            }
          });

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                     // eslint-disable-next-line   
                     <p>🌟</p> 
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
