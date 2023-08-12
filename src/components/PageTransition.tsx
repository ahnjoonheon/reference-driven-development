'use client'
import React from "react";
import {motion} from "framer-motion";

export default function PageTransition( {children} : { children: React.ReactNode }) {
    console.log("PageTransition.tsx: PageTransition( {children} : { children: React.ReactNode })");

    // 이 부분에서 transitioning 값에 따라 원하는 로직을 실행하거나 렌더링을 수행합니다.
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`flex-1 flex justify-center items-start lg:pr-[260px]`}
        >
            {children}
        </motion.div>
    )
}
