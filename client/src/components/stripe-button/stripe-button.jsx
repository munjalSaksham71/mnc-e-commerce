import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import img from '../../assets/crown.svg';

const StripeCheckoutButton = ({price}) => {
    const priceforstripe = price *100;
    const publishablekey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceforstripe,
                token
            }
        }).then(response => {
            alert('Payment Succesful')
        }).catch(error => {
            console.log('payment error: ', JSON.parse(error));
            alert('There Was An Issue With Your Payment . Please Sure You Use The Provided Credit Card');
        })
    } 

    return(
        <StripeCheckout
          label='Pay Now'
          name='MNC Clothing Ltd.'
          billingAddress
          shippingAddress
          image={img}
          description={`Your Total Is $${price}`}
          amount={priceforstripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;