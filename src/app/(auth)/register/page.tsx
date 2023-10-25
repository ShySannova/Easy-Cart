"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Register = (props: Props) => {
    const { push } = useRouter();
    return (
        <main className="h-[100vh] bg-gray-200">
            <div className="w-[80%] h-full mx-auto flex justify-center items-center">
                <div className="shadow-lg p-4 w-fit flex flex-col gap-4 text-black border border-gray-300">
                    <h2 className="text-2xl font-semibold">SignUp</h2>
                    <input
                        className="p-2"
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <input
                        className="p-2"
                        type="password"
                        placeholder="Enter your Password"
                    />
                    <input
                        className="p-2"
                        type="password"
                        placeholder="Confirm your Password"
                    />
                    <button
                        onClick={() => {
                            push("/login");
                        }}
                        className="rgba hover:bg-gray-600 text-white p-2">
                        SignUp
                    </button>
                    <p>
                        Already have an account?&nbsp;
                        <Link className="text-blue-500 hover:underline" href={"/login"}>
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Register;
