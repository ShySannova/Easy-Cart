import Link from "next/link";
import React from "react";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className=" bg-gray-600 py-8 text-white">
            <div className="w-[80%] mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-semibold text-xl">About Us</h2>
                        <p className="w-[50%]">
                            Easy-Cart is a e-commerce website website that
                            provides high-quality products to our customers at
                            affordable prices.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Contact Us</h2>
                        <ul className="flex flex-col gap-2 py-2">
                            <li className="flex gap-1 items-center">
                                <FaMapMarkerAlt />
                                123 Main Street, Anytown India
                            </li>
                            <li className="flex gap-1 items-center">
                                <FaPhone /> (555) 555-5555
                            </li>
                            <li className="flex gap-1 items-center">
                                <FaEnvelope />
                                info@Easy-Cart.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Links</h2>
                        <ul className="links-list">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Follow Us</h2>
                        <ul className="flex gap-4 py-4">
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://github.com/ShySannova">
                                    <FaGithub />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/in/sandeep09prasad/">
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://shysan.netlify.app/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://shysan.netlify.app/">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>
                        &copy; 2023 Ecommerce Inc. All rights reserved By ShySan
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
