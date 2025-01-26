import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updateItems = storedItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(updateItems);

    // total
    const initialTotal = updateItems.reduce(
      (total, item) => total + item.productprice * item.quantity,
      0
    );
    setTotalPrice(initialTotal);
  }, []);

  // quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updateItems = [...cartItems];
    updateItems[index].quantity = newQuantity;
    setCartItems(updateItems);
    localStorage.setItem('cartItems', JSON.stringify(updateItems));

    // recalculate total
    const newTotal = updateItems.reduce(
      (total, item) => total + item.productprice * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  };

  // Remove Item
  const handleRemoveItem = (index) => {
    const updateItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updateItems);
    localStorage.setItem('cartItems', JSON.stringify(updateItems));

    // recalculate total
    const newTotal = updateItems.reduce(
      (total, item) => total + item.productprice * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  };

  // payment method
  const handlePayNow = () => {
    const options = {
      key: 'rzp_live_HGCsLV5PjSYo8F',
      amount: totalPrice * 100,
      currency: 'INR',
      name: 'DigiCoders',
      description: 'Order Payment',
      image: 'https://yourlogo.com',
      handler: function (response) {
        alert('Payment successfully! Payment Id ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Customer Name',
        email: 'test123@gmail.com',
        contact: '6378563788',
      },
      notes: {
        address: 'khgfghdsk',
      },
      theme: {
        color: '#F37254',
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-8">Cart Details</h2>
        {cartItems.length > 0 ? (
          <>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.productname}</td>
                    <td className="px-4 py-2">&#8377;{item.productprice}</td>
                    <td className="px-4 py-2">{item.productcategory}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="quantity-input border px-2 py-1 rounded"
                        onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-2">&#8377;{item.productprice * item.quantity}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-semibold">Total: &#8377;{totalPrice}</h3>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-xl">No Items in Cart</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
