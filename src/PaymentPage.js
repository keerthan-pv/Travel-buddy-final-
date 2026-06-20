import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPackage, peopleCount, pickupTime, guideLanguage, totalCost } = location.state || {};

  const [orderId, setOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isChecked, setIsChecked] = useState(false); // ✅ checkbox state

  if (!selectedPackage) {
    navigate('/');
    return null;
  }

  const createOrder = async () => {
    try {
      const response = await fetch('http://localhost:5050/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalCost,
          packageName: selectedPackage.name,
        }),
      });
      const data = await response.json();
      if (data.orderId) {
        setOrderId(data.orderId);
      } else {
        console.error('Failed to create order:', data);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const handlePayNow = async () => {
    if (!orderId) {
      setIsLoading(true);
      await createOrder();
      setIsLoading(false);
    }

    if (orderId) {
      const isPaymentSuccessful = Math.random() > 0.5; // Simulate success/failure
      const paymentStatus = isPaymentSuccessful ? 'success' : 'failed';

      try {
        const response = await fetch('http://localhost:5050/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId,
            paymentStatus,
          }),
        });

        const data = await response.json();

        if (data.status === 'success') {
          setPaymentStatus('Payment successful!');
          alert('Payment was successful!');

          // ✅ Generate and save PDF
          const doc = new jsPDF();
          doc.text('Payment Confirmation', 10, 10);
          doc.text(`Order ID: ${orderId}`, 10, 20);
          doc.text(`Package: ${selectedPackage.name}`, 10, 30);
          doc.text(`Pickup Time: ${pickupTime}`, 10, 40);
          doc.text(`People Count: ${peopleCount}`, 10, 50);
          doc.text(`Guide Language: ${guideLanguage}`, 10, 60);
          doc.text(`Total Cost: Rs. ${totalCost}`, 10, 70);         
          doc.save('payment-confirmation.pdf');

          // ✅ Redirect with data
          navigate('/paymentconfirmation', {
            state: {
              selectedPackage,
              peopleCount,
              pickupTime,
              guideLanguage,
              totalCost,
              orderId,
              paymentStatus: 'Payment successful!',
            },
          });
        } else {
          setPaymentStatus('Payment failed. Please try again.');
          alert('Payment failed. Please try again!');
        }
      } catch (err) {
        console.error('Payment verification failed:', err);
        setPaymentStatus('Payment verification error.');
      }
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>Payment Page</h1>

        <div className="payment-details">
          <h3>Package Details:</h3>
          <p><strong>Package:</strong> {selectedPackage.name}</p>
          <p><strong>Pickup Time:</strong> {pickupTime}</p>
          <p><strong>Number of People:</strong> {peopleCount}</p>
          <p><strong>Guide (Lang):</strong> {guideLanguage}</p>
          <p><strong>Total Cost:</strong> ₹{totalCost}</p>
        </div>

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="agree"> I agree to the terms and conditions</label>
        </div>

        <div className="payment-actions">
          {isLoading ? (
            <p>Loading order...</p>
          ) : (
            <button onClick={handlePayNow} disabled={!isChecked}>
              Pay Now
            </button>
          )}
        </div>

        {paymentStatus && (
          <div className="payment-status">{paymentStatus}</div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
