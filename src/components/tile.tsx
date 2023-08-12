import React from "react";
import Link from "next/link";
import {lightRoboto, mediumRoboto} from "@/app/font";
import Image from "next/image";
import styles from "@/styles/tile.module.css";

export default function Tile({ title, content, thumbnailUrl, author, date, size = 'medium' }: Post){
    return (
        <Link href="/">
            <div className={`grid-item ${size} bg-white text-gray-700 p-4 rounded-xl transition ease-in-out duration-300 m-0.5 hover:bg-gray-200 `}>

                <div className="flex items-center space-x-4">
                    {/* Thumbnail */}
                    {
                        thumbnailUrl && (
                            <Image src={thumbnailUrl} alt="Thumbnail" className="rounded-full"  width={`30`} height={`30`} layout={`response`}/>
                        )
                    }
                    <div>
                        <div className={`item-title text-left text-sm truncate w-20 ${mediumRoboto.className}`}>
                            {title}
                        </div>
                        <div className={`text-gray-500 text-xs ${lightRoboto.className}`}>  {/* Author and date info */}
                            {author} · {date}
                        </div>
                    </div>
                </div>
                <div className={`item-content text-left text-xs mt-2 ${styles["multi-line-truncate"]} ${styles["multi-line-truncate-3"]} ${lightRoboto.className}`}>
                    {content}
                </div>
            </div>
        </Link>
    );
}

type ImageSize = {
    width: number;
    height: number;
}
