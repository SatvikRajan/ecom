import React from 'react';

function CartSummary({ cart }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-lg font-bold">Cart Summary</h2>
      <p className="text-gray-700">Subtotal: ${subtotal.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-dark px-4 py-2 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
