import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

// Define the SliderProductProps interface with a product property
interface SliderProductProps {
    product: Product;
}

const SliderProduct = ({ product }: SliderProductProps) => {
    return (
        // Create a link to the product details page with the product's title and ID
        <Link
            href={`products/product/${product.title}/${product.id}`}
            className="w-[200px] h-[280px] rounded-md bg-gray-200 shadow-md text-center overflow-hidden font-semibold">
            <div className="relative h-[80%]">
                <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-top object-fill"
                />
            </div>
            <div className="h-">
                <h2>{product.title.substring(0, 16) + ` ...`}</h2>
                <span>
                    <strong>&#8377;{product.price} </strong>
                    <del>{((product.price * 350) / 100).toFixed(2)}</del>
                </span>
            </div>
        </Link>
    );
};

export default SliderProduct;
