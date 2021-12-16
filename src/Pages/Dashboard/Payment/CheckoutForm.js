import { Alert } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

      const stripe = useStripe();
      const elements = useElements();

      const [error, setError] = useState('')

      const handleSubmit = async (e) => {
            e.preventDefault()

            if (!stripe || !elements) {
                  // Stripe.js has not loaded yet. Make sure to disable
                  // form submission until Stripe.js has loaded.
                  return;
            }

            const card = elements.getElement(CardElement);

            if (card == null) {
                  return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card,
            });

            if (error) {
                  setError(error.message)
            } else {
                  setError('')
                  console.log('[PaymentMethod]', paymentMethod);
            }

      }
      return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <form style={{ width: '50%', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {

                                          base: {
                                                fontSize: '20px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        <button style={{ marginTop: '12px', fontSize: '20px', padding: '6px' }} type="submit" disabled={!stripe}>
                              Pay
                        </button>
                        <br />
                        {
                              error &&
                              <Alert severity="error">{error}!</Alert>

                        }
                  </form>

            </div>
      );
};

export default CheckoutForm;