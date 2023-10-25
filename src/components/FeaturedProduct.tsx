import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

// Define the FeaturedProps interface with a "products" property of type Product array
interface FeaturedProps {
    products: Product[];
}

const FeaturedProduct = ({ products }: FeaturedProps) => {
    return (
        <div className="h-full grid grid-cols-2 gap-4 rounded-md text-center text-white">
            {/* Link to the products page with exciting offers */}
            <Link href={`/products`} className="rounded-md overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={products[16].image} alt="" fill />
                    <div className="absolute bottom-0 w-full hover:h-full h-[40%] flex flex-col gap-2 justify-center items-center text-2xl capitalize transition-all rgba">
                        <h2>{products[16].category}</h2>
                        <strong>excitng offers</strong>
                    </div>
                </div>
            </Link>
            <Link href={`/products`} className="rounded-md overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={products[4].image} alt="" fill />
                    <div className="absolute bottom-0 w-full hover:h-full h-[40%] flex flex-col gap-2 justify-center items-center text-2xl capitalize transition-all rgba">
                        <h2>{products[4].category}</h2>
                        <strong>excitng offers</strong>
                    </div>
                </div>
            </Link>
            <Link href={`/products`} className="rounded-md overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={products[11].image} alt="" fill />
                    <div className="absolute bottom-0 w-full hover:h-full h-[40%] flex flex-col gap-2 justify-center items-center text-2xl capitalize transition-all rgba">
                        <h2>{products[11].category}</h2>
                        <strong>excitng offers</strong>
                    </div>
                </div>
            </Link>
            <Link href={`/products`} className="rounded-md overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={products[18].image} alt="" fill />
                    <div className="absolute bottom-0 w-full hover:h-full h-[40%] flex flex-col gap-2 justify-center items-center text-2xl capitalize transition-all rgba">
                        <h2>{products[18].category}</h2>
                        <strong>excitng offers</strong>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedProduct;
