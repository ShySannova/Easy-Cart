"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
    const { push } = useRouter();
    return (
        <header className="bg-white shadow-lg text-black capitalize border border-b-1 sticky top-0 z-10 w-full">
            <div className="flex justify-between items-center w-[80%] py-[10px] mx-auto">
                <Link href={"/"} className="w-[10%]">
                    <h1 className="font-semibold text-2xl">easy-cart</h1>
                </Link>
                <nav className="w-[80%] font-semibold">
                    <ul className="flex w-[20%] ml-auto justify-evenly items-center">
                        <li>
                            <Link href={"/"}>home</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>about</Link>
                        </li>
                        <li>
                            <Link href={"/cart"}>cart</Link>
                        </li>
                    </ul>
                </nav>
                {/* <div className='w-[10%] flex justify-end items-center'>
              <button onClick={signIn} className='bg-blue-400 px-4 py-1 rounded-md font-semibold text-white'>Login</button>
          </div> */}
                <div className="w-[10%] flex justify-end items-center">
                    <button
                        onClick={() => {
                            push("/login");
                        }}
                        className="bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-md font-semibold text-white">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
