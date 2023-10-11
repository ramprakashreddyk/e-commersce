"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsMastodon, BsFillCartDashFill } from "react-icons/bs";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (itemName:any) => {
        setActiveItem(itemName);
    };

    return (
        <div className="flex fixed top-[72px] w-1/6">
            <div className="w-full h-screen bg-gray-200 p-4">
                <Link href="/"
                    className={`mb-4 flex items-center py-3 px-3 cursor-pointer transform hover:scale-105 transition-transform ${activeItem === 'Home' ? 'bg-blue-200' : ''
                        }`}
                    onClick={() => handleItemClick('Home')}
                >
                    <AiFillHome className="text-2xl mr-2" />
                    <h1 className="text-xl">Home</h1>
                </Link>

                <Link href="/Products"
                    className={`mb-4 flex items-center py-3 px-3 cursor-pointer transform hover:scale-105 transition-transform ${activeItem === 'Products' ? 'bg-blue-200' : ''
                        }`}
                    onClick={() => handleItemClick('Products')}
                >
                    <AiOutlineShoppingCart className="text-2xl mr-2" />
                    <h1 className="text-xl">Products</h1>
                </Link>

                <Link href="/Todos"
                    className={`mb-4 flex items-center py-3 px-3 cursor-pointer transform hover:scale-105 transition-transform ${activeItem === 'Todos' ? 'bg-blue-200' : ''
                        }`}
                    onClick={() => handleItemClick('Todos')}
                >
                    <BsMastodon className="text-2xl mr-2" />
                    <h1 className="text-xl">Todos</h1>
                </Link>

                <Link href="/Cart"
                    className={`mb-4 flex items-center py-3 px-3 cursor-pointer transform hover:scale-105 transition-transform ${activeItem === 'Cart' ? 'bg-blue-200' : ''
                        }`}
                    onClick={() => handleItemClick('Cart')}
                >
                    <BsFillCartDashFill className="text-2xl mr-2" />
                    <h1 className="text-xl">Cart</h1>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
