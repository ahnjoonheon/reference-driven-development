'use client'
import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import Tile from "@/components/tile";

export default function TileGrid({ items }: { items: Post[] }) {
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (gridRef.current) {
            new Masonry(gridRef.current as any, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true
            });
        }
    }, [items]);

    return (
        <div ref={gridRef} className="grid">
            <div className="grid-sizer"></div> {/* This sets the column width for the grid */}
            {items.map(item => (
                <Tile
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    size={item.size}
                    author={item.author}
                    date={item.date}
                    thumbnailUrl={item.thumbnailUrl}
                 id={item.id}/>
            ))}
        </div>
    );
}

