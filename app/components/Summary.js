import { useContext } from "react";
import Image from "next/image";

import { AppLayoutContext } from "../context/provider";

const CartSummary = () => {
    const { cartItems } = useContext(AppLayoutContext);

    const grandTotal = (cartItems || []).reduce((a, b) => a + (b.price * b.quantity), 0);

    return (
        <div className="flex flex-col space-y-2">
            <div className="rounded-xl shadow-xl bg-white p-4">
                <p className="border-b border-b-black pb-2 mb-2 font-semibold">Summary</p>
                {cartItems?.length < 1 && (
                    <span className="text-center w-full block">No Items Yet.</span>
                )}
                {(cartItems || [])?.map(item => (
                    <div key={item.id} className="flex items-center justify-between  border-b pb-2 mb-2">
                        <div className="flex items-center space-x-3">
                            <Image className="object-contain w-10 h-10" alt={item.title} src={item.image} width={100} height={100} />
                            <span className="rotate-45 block">&#10010;</span>
                            <span>({item.quantity})</span>
                        </div>
                        <div className="font-semibold">NGN {(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-between rounded-xl shadow-xl bg-black py-4 px-2 lg:px-4 !mb-4 text-white">
                <span>Grand Total:</span>
                <span>NGN {grandTotal.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default CartSummary;