"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

// Define an array of banner slide images
const bannerSlide = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/868123fbb7edb670.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e05c74a01f71a51.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8948611244f67dc6.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6e0a9c81fc82ce85.png?q=20",
];

const BannerSlider = (props: Props) => {
    // Create state for the current slide index
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        // Change the slide every 5 seconds
        const interval = setInterval(() => {
            setSlide((prev) =>
                prev === bannerSlide.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        // Clean up the interval to prevent memory leaks
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="shadow-xl w-full h-[280px] text-center text-black relative rounded-md overflow-hidden">
            <Image
                src={bannerSlide[slide]}
                alt=""
                fill
                className="object-contain"
            />
        </section>
    );
};

export default BannerSlider;
