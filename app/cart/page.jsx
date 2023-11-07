"use client";

import { useContext } from "react";
import Link from "next/link";

import { AppLayoutContext } from "../context/provider";
import CartItem from "../components/CartItem";
import CartSummary from "../components/Summary";

const Cart = () => {
    const { cartItems } = useContext(AppLayoutContext);

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between">
            <div className="w-full lg:w-8/12">
                {(cartItems || []).map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
                
                {cartItems.length < 1 && (
                    <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-xl p-5">
                        <span>No Item in Cart...</span>
                        <Link className="underline mt-2" href="/">Continue Shopping</Link>
                    </div>
                )}
            </div>
            <div className="w-full lg:w-4/12">
                <CartSummary />
            </div>
        </div>
    );
};

export default Cart;
