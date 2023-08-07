import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="mt-auto bg-white p-1 border-t-2 border-gray-200">
            <div className="container mx-auto px-4">
                <div className="sm:flex justify-between">
                    <div className="text-center sm:text-left py-3">
                        <p className="text-sm">© 2023 - RDD</p>
                        <p className="text-sm">contact@example.com</p>
                    </div>
                    <div className="text-center sm:text-left py-3">
                        <div>
                            <a href="https://github.com/ahnjoonheon/reference-driven-development"><image href="/facebook.png" />Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}