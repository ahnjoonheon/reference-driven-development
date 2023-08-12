'use client'
import { useEffect, useRef, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Tree from "@/components/tree";

export default function SideBar ({ treeData = [] } : { treeData?: TreeNode[]}) {
    const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth >= 1024);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (window.innerWidth >= 1024) {
                // lg 화면 크기 이상일 때는 사이드바 외부 클릭 동작을 무시합니다.
                return;
            }
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        function handleResize() {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                ref={toggleBtnRef}
                className="fixed top-4 right-4 p-2 bg-transparent lg:hidden z-50 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <XMarkIcon className="w-6 h-6 text-gray-900 hover:text-gray-300" />
                ) : (
                    <Bars3BottomRightIcon className="w-6 h-6 text-gray-900 hover:text-gray-300" />
                )}
            </button>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-52 lg:max-w-[320px] lg:min-w-[320px] bg-white text-gray-700 overflow-y-auto transform transition ease-in-out duration-300 py-6 px-5 space-y-4 border-l border-gray-200 ${
                    isOpen || window.innerWidth >= 1024 ? "shadow-2xl translate-x-0" : "translate-x-full"
                } lg:block`}
            >
                <Tree data={treeData} />
            </div>
        </div>
    );
};