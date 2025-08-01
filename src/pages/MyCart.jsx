// src/pages/Checkout.jsx
import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const MyCart = ({ cart, setCart }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const updateQuantity = (productId, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQty >= 1 ? newQty : 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill in all customer details before checkout.');
      return;
    }

    const paystack = new PaystackPop();

    const productDetails = cart.map((item) => ({
      product: item.title,
      quantity: item.quantity,
      amount: item.price * item.quantity,
    }));

    paystack.newTransaction({
      key: 'pk_test_83204864bb4a60c9af0ed1616a2403ecaea75280', // Replace with your actual Paystack public key
      amount: totalAmount * 100,
      email: customerInfo.email,
      currency: 'GHS',
      metadata: {
        custom_fields: [
          {
            display_name: 'Full Name',
            variable_name: 'full_name',
            value: customerInfo.name,
          },
          {
            display_name: 'Phone Number',
            variable_name: 'phone',
            value: customerInfo.phone,
          },
          {
          display_name: "Cart Details",
          variable_name: "cart_details",
          value: JSON.stringify(productDetails), // store as JSON string
        },
        ],
      },
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);
        setCart([]);
      },
      onCancel: () => {
        alert('Payment Cancelled');
      },
    });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-green-50 p-6 rounded-xl shadow-md overflow-x-auto mb-6">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b text-green-900">
                    <td className="px-4 py-2 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.category}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">₵{item.price}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="border rounded px-2 w-16 text-center"
                      />
                    </td>
                    <td className="px-4 py-2 font-semibold">
                      ₵{item.price * item.quantity}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Customer Info */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Customer Information</h2>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
            </form>
          </div>

          {/* Checkout */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-lg font-semibold text-green-800">
              Total Amount: ₵{totalAmount}
            </div>
            <button
              onClick={handleCheckout}
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 w-full md:w-auto"
            >
              Checkout with Paystack
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
