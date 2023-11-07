"use client"

import { useContext } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import { Rating } from "react-simple-star-rating";

import { getProductListing } from "@/app/lib/reactQuery/actions";
import { AppLayoutContext } from "@/app/context/provider";
import LoadingBouncer from "@/app/components/Loader";

const ProductDetails = () => {
    const { handleAddToCart } = useContext(AppLayoutContext);

    const params = useParams();

    const { data, isLoading } = useQuery("PRODUCT_LISTING", () => getProductListing());

    const product = (data || [])?.find(item => item.id == params.id);

    return (
        <div className="flex justify-between self-center bg-white rounded-xl shadow-xl min-h-[calc(75vh)] py-5 px-8 lg:px-16 w-full">
            {isLoading ? (
                <LoadingBouncer />
                ): (
                <div className="duration-1000 flex flex-col lg:flex-row w-full">
                    <Image alt={product.title} className="h-full w-auto max-w-[50%] mx-auto object-contain lg:py-5 lg:pr-10" src={product.image} width={100} height={100} />
                    <div className="flex flex-col border-l pl-2 lg:pl-10 mt-5 grow lg:mt-0">
                        <span className="font-bold">{product.title}</span>
                        <hr className="my-5" />
                        <span className="text-sm">{product.description}</span>
                        <Rating className="my-10" size={40} SVGstyle={{ "display": "inline" }} iconsCount={5} initialValue={Number(product?.rating?.rate)} readonly={true} allowFraction={true} />
                        <span className="font-semibold text-xl">NGN {product?.price.toLocaleString()}</span>
                        <button className="bg-black text-white h-12 mt-auto" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                </div>
            )}

            {!isLoading && !product && (
                <p className="flex items-center justify-center w-full">...Product Not Found...</p>
            )}
        </div>
    );
};

export default ProductDetails;
