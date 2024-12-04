import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link to="/" className="text-lg font-bold">
                E-Commerce
            </Link>
            <Link to="/cart" className="relative">
                Cart ({cartCount})
            </Link>
        </nav>
    );
}

export default Navbar;
