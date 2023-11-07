import { useContext } from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import { AppLayoutContext } from "../context/provider";

const CartItem = ({ item }) => {
    const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } = useContext(AppLayoutContext);

    return (
        <div key={item.id} className="w-full flex bg-white shadow-lg p-2 md:p-4 rounded-xl mb-4 relative">
            <span
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer absolute w-fit right-0 bottom-0 h-fit lg:top-0 bg-red-800 text-white flex items-center justify-center p-2 shadow"
            >x</span>
            <div className="border-r px-4 mr-4 w-1/2 md:w-3/12 flex justify-center items-center">
                <Image className="object-contain w-32 h-32" alt={item.title} src={item.image} width={100} height={100} />
            </div>
            <div className="flex flex-col md:flex-row w-1/2 md:w-9/12">
                <div className="flex flex-col w-full md:w-9/12">
                    <span className="text-sm font-semibold border-b pb-1 mb-1">{item.title}</span>
                    {/* <span className="text-xs">{item.description}</span> */}
                    <Rating className="mb-2" size={25} SVGstyle={{ "display": "inline" }} iconsCount={5} initialValue={Number(item?.rating?.rate)} readonly={true} allowFraction={true} />
                    <span className="text-lg lg:text-xl font-bold md:mt-auto">NGN {item.price.toLocaleString()}</span>
                </div>
                <div className="w-full md:w-3/12 flex items-center space-x-3 justify-start md:justify-center self-center">
                    <span className="rounded-l-lg bg-black text-white block p-1 lg:p-2 cursor-pointer" onClick={() => decreaseItemQuantity(item.id)}>-</span>
                    <span className="w-4 text-center">{item.quantity}</span>
                    <span className="rounded-r-lg bg-black text-white block p-1 lg:p-2 cursor-pointer" onClick={() => increaseItemQuantity(item.id)}>+</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
