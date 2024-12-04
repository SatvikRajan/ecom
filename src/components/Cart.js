import React from 'react';

function Cart({ cart, setCart }) {
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const calculateSubtotal = () =>
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-700 text-lg">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                        {cart.map((item) => (
                            <div key={item.id} className="border p-4 rounded-lg flex items-center mb-4 bg-white shadow-md">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-24 w-24 object-contain mr-4 rounded-lg"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <label className="text-gray-700 mr-2">Quantity:</label>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            className="w-16 p-1 border rounded"
                                            min="1"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                        <p className="text-lg">
                            Subtotal: <span className="font-semibold">${calculateSubtotal()}</span>
                        </p>

                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Discount Code</label>
                            <input
                                type="text"
                                placeholder="Enter discount code"
                                className="w-full p-2 border rounded mb-4"
                            />
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                                Apply Discount
                            </button>
                        </div>

                        <hr className="my-4" />

                        <p className="text-xl font-bold">
                            Total: <span className="text-green-600">${calculateSubtotal()}</span>
                        </p>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-green-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
