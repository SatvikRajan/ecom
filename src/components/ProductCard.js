import React from 'react';
import Swal from 'sweetalert2'
function ProductCard({ product, addToCart }) {
    const handleAddToCart = (product) => {
        addToCart(product);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to Cart",
            showConfirmButton: false,
            timer: 1000,
            imageHeight: 1000
        });
    };


    return (
        <div className="relative border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold">{product.title.split(' ').slice(0, 10).join(' ')}...</h2>
            <p className="text-gray-500 mt-4 mb-4">{product.description.split(' ').slice(0, 20).join(' ')}...</p>
            <p className="text-xl text-dark-500">${product.price}</p>
            <button
                className={'mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'}
                onClick={() => handleAddToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
