import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-auto bg-white p-1 border-t-2 border-gray-200">
            <div className="container mx-auto px-4">
                <div className="sm:flex justify-between">
                    <div className="text-center sm:text-left py-3">
                        <p className="font-bold text-lg">CONTACT</p>
                        <div className="flex items-center">
                            <Image src="/email.svg" alt="Email" width={20} height={20}/>
                            <p className="text-sm font-semibold ml-1">
                                universal304015@gmail.com
                            </p>
                        </div>
                        <Link href="https://github.com/aj172019/reference-driven-development">
                            <div className="flex items-center">
                                <Image src="/github.svg" alt="Github" width={20} height={20}/>
                                <p className="text-sm font-semibold ml-1">
                                    reference-driven-development
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}