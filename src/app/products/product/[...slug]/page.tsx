"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    FaCartPlus,
    FaCheckCircle,
    FaHeart,
    FaStar,
    FaTag,
    FaTruck,
} from "react-icons/fa";

type Props = {};

const ProductDetails = ({ params }: any) => {
    const { push } = useRouter();

    // Fetch product data from an external API when the component mounts
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.slug[1]}`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    }, [params.slug]);

    // State to hold the product data
    const [product, setProduct] = useState<Product | null>(null);

    return (
        <main className="h-[100vh] bg-gray-200">
            <div className="w-[80%] h-full mx-auto py-8 flex justify-center items-center">
                {/* Render product details when product data is available */}
                {product && (
                    <div className="bg-gray-100 w-[60%] h-[50vh] flex items-center gap-8 p-8 text-black rounded-lg shadow-lg">
                        <div className="relative w-[40%] h-full">
                            <Image
                                src={product.image}
                                alt=""
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="w-[60%] flex flex-col gap-2">
                            <h2 className="text-2xl">{product.title}</h2>
                            <span className="flex items-center">
                                <p>{product.rating.rate}</p>
                                <FaStar />
                            </span>
                            <span>
                                <strong>&#8377;{product.price} </strong>
                                <del>
                                    &#8377;
                                    {((product.price * 350) / 100).toFixed(2)}
                                </del>
                            </span>
                            <p>
                                {product.description.substring(0, 150) + "..."}
                            </p>
                            <span className="flex items-center gap-2">
                                <FaTruck />
                                <p>Fastest Delivery</p>
                            </span>
                            <span className="flex items-center gap-2">
                                <FaTag />
                                <p>Inclusive of All Taxes</p>
                            </span>
                            <span className="flex items-center gap-2">
                                <FaCheckCircle />
                                <p> Cash On Delivery Available</p>
                            </span>
                            <button
                                onClick={() => {
                                    push("/login");
                                }}
                                className="rgba hover:bg-gray-600 text-white py-2 px-4 text-center">
                                <span className="flex items-center gap-2 justify-center">
                                    <FaCartPlus />
                                    Add To Cart
                                </span>
                            </button>
                            <button className="rgba hover:bg-gray-600 text-white py-2 px-4 text-center">
                                <span className="flex items-center gap-2 justify-center">
                                    <FaHeart />
                                    Add To WishList
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProductDetails;
