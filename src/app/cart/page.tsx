"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const cart = []; // Initialize an empty cart array (for demonstration purposes)

const Cart = (props: Props) => {
    const { push } = useRouter();
    return (
        <section className="h-[100vh] bg-white text-black">
            <div className="w-[80%] mx-auto py-4 flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold">My Cart</h2>

                {cart.length === 0 ? (// Check if the cart is empty
                    <>
                        <div>
                            <h2>
                                "Oh no! 🛒💔 Your cart feels a bit too light.
                                It's craving for fashionable additions! Embark
                                on a shopping spree and fill it with trendy
                                outfits that will make heads turn! 💃✨
                            </h2>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-4">
                            <div className="relative w-[60%] h-[500px]">
                                {/* Display an image when the cart is empty */}
                                <Image
                                    alt=""
                                    src={
                                        "https://res.cloudinary.com/dptfwcnro/image/upload/v1684751671/E-comm%20ATTIREX/Empty/undraw_Add_to_cart_re_wrdo_rciqaa.png"
                                    }
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <img src="" alt="" />
                            <button
                                onClick={() => {
                                    // Redirect to the products page when the "Add Products" button is clicked
                                    push("/products");
                                }}
                                className="rgba hover:bg-gray-600 py-2 px-4 text-white w-[25%]">
                                Add Products
                            </button>
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
};

export default Cart;
