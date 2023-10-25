import React from "react";
import SliderProduct from "./SliderProduct";
import Link from "next/link";

type Props = {};

// Define the CategoryProps interface with a "products" property of type Product array
interface CategoryProps {
    products: Product[];
}

const Category = ({ products }: CategoryProps) => {
    return (
        <div className="py-4 text-black">
            <h2 className="capitalize font-semibold text-xl">
                {/* Link to the category's products page */}
                <Link href={`products/`}>
                    {products[0].category ===
                    products[products.length - 1].category
                        ? products[0].category
                        : `All Products`}
                </Link>
            </h2>
            <div className="grid gap-8 overflow-x-auto grid-flow-col-dense py-2">
                {products.map((product: Product) => {
                    return (
                        // Render the SliderProduct component for each product
                        <SliderProduct key={product.id} product={product} />
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
