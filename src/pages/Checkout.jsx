// src/pages/Checkout.jsx
import React from 'react';
import PaystackPop from '@paystack/inline-js';

const Checkout = ({ cart, setCart }) => {
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
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_83204864bb4a60c9af0ed1616a2403ecaea75280',
      amount: totalAmount * 100,
      email: 'customer@example.com',
      currency: 'GHS',
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
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-green-50 p-6 rounded-xl shadow-md overflow-x-auto">
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

          <div className="flex justify-end mt-6">
            <div className="text-lg font-semibold text-green-800">
              Total Amount: ₵{totalAmount}
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 w-full md:w-auto"
          >
            Checkout with Paystack
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
