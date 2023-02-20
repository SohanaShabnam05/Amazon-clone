//import { useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError ] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        //
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
            Checkout {<Link to="/checkout">{basket?.length} items </Link>}
        </h1>
    {/* Delivery Address */}
            <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>Chowbaga Road, Anandapur</p>
                <p>Kolkata, 700107</p>
            </div>
        </div>

        {/* Review Item */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
       
            <div className='payment__items'>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                ))}
            </div>
        </div>
        {/* Payment method */}
        <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                
                            </div>
                        </form>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
