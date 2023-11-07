import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="w-full md:w-[calc(33%-1.125rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.125rem)] bg-white shadow hover:shadow-2xl group rounded flex flex-col">
            <Link href={`/product/${product?.id}`} className="w-full flex justify-between md:flex-col cursor-pointer p-2 pb-0 overflow-hidden">
                <Image alt={product?.title} className="w-1/2 shrink-0 md:w-full h-44 max-h-44 border-r md:border-r-0 pr-4 object-contain group-hover:scale-110 duration-1000" width={100} height={100} src={product.image} />
                <div className="flex flex-col w-full my-2 px-2 md:px-0">
                    <span className="text-xs">{product?.title}</span>
                    <hr className="mt-1" />
                    <span className="font-bold text-xl">NGN {product?.price.toLocaleString()}</span>
                    <div className="flex items-center space-x-2">
                        <Rating className="mb-2" size={25} SVGstyle={{ "display": "inline" }} iconsCount={5} initialValue={Number(product?.rating?.rate)} readonly={true} allowFraction={true} />
                        <span className="text-sm hidden md:block">({product?.rating?.count})</span>
                    </div>
                </div>
            </Link>
            <div className="p-2 mt-auto">
                <button onClick={onAddToCart} className="w-full border rounded h-10 mt-auto text-sm">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
