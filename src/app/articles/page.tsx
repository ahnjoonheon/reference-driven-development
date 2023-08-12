import React from "react";
import dynamic from 'next/dynamic';

const TileGrid = dynamic(
    () => import('@/components/tile-grid'),
    { ssr: false }
);

export default function Articles () {
    const items: Post[] = [
        {
            id: 1,
            title: "title1title1title1title1title1title1title1title1title1title1title1title1",
            content: "on offering to help the blind man, the man who then stole his car, had not, at that precise moment, had any evil intention, quite the contrary, what he did was nothing more than obey those feelings of generosity and altruism which, as everyone knows, are the two best traits of human nature and to be found in much more hardened criminals than this one, a simple car thief without any hope of advancing in his profession, exploited by the real owners of this enterprise, for it is they who take advantage of the needs of the poor",
            size: "large",
            author: "author1",
            date: "date1",
            thumbnailUrl: "/img.png" },
        {
            id: 2,
            title: "title2",
            content: "on offering to help the blind man, the man who then stole his car, had not, at that precise moment, had any evil intention, quite the contrary, what he did was nothing more than obey those feelings of generosity and altruism which, as everyone knows, are the two best traits of human nature and to be found in much more hardened criminals than this one, a simple car thief without any hope of advancing in his profession, exploited by the real owners of this enterprise, for it is they who take advantage of the needs of the poor",
            size: "small",
            author: "author2",
            date: "date2",
            thumbnailUrl: "" },
        { id: 3,
            title: "title3",
            content: "on offering to help the blind man, the man who then stole his car, had not, at that precise moment, had any evil intention, quite the contrary, what he did was nothing more than obey those feelings of generosity and altruism which, as everyone knows, are the two best traits of human nature and to be found in much more hardened criminals than this one, a simple car thief without any hope of advancing in his profession, exploited by the real owners of this enterprise, for it is they who take advantage of the needs of the poor",
            size: "medium",
            author: "author3",
            date: "date3",
            thumbnailUrl: "" },
    ];

    return (
        <div className="w-3/4 mx-auto mt-4 bg-gray-50 p-4">
            <TileGrid
                items={items}
            />
        </div>
    );
};
