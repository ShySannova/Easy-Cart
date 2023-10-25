import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

// Define the ProductsProps interface with a product property
interface ProductsProps {
    product: Product;
}

const Product = ({ product }: ProductsProps) => {
    return (
        // Create a link to the product details page with the product's title and ID
        <Link
            href={`products/product/${product.title}/${product.id}`}
            className="w-[250px]  rounded-md shadow-lg border border-inherit text-center p-2">
            <div className="relative h-[250px] rounded-md overflow-hidden">
                <Image src={product.image} alt="" fill />
            </div>
            <div className="h-[30%] flex flex-col gap-2 py-2 text-left">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold">
                        {product.title.substring(0, 12) + `...`}
                    </h2>
                    <span className="flex justify-center items-center gap-1 rgba rounded-full py-[.5px] px-2 text-orange-200">
                        <p>{product.rating.rate}</p>
                        <FaStar />
                    </span>
                </div>
                <p className="font-semibold text-blue-400">
                    {product.description.substring(0, 20) + `...`}
                </p>
                <span className="flex items-end gap-2">
                    <strong className="text-xl">&#8377;{product.price}</strong>
                    <del className="text-blue-400">
                        {((product.price * 350) / 100).toFixed(2)}
                    </del>
                </span>
                <button className="capitalize rgba font-bold text-xl py-2 px-6 rounded-md text-white hover:bg-gray-400">
                    Add to cart
                </button>
            </div>
        </Link>
    );
};

export default Product;
