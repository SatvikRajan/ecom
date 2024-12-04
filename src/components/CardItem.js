import React from 'react';

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
      <div className="flex-1 ml-4">
        <h2 className="text-lg">{item.title}</h2>
        <p className="text-green-500">${item.price}</p>
        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            className="border p-1 w-16"
            onChange={(e) => updateQuantity(item.id, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
