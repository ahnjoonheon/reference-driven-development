import React, { useState } from 'react';
import Link from "next/link";
import {
    MinusSmallIcon,
    PlusSmallIcon
} from "@heroicons/react/24/outline";
import {lightRoboto, mediumRoboto} from "@/app/font";

export default function Tree({ data, level = 0, style } : {
    data: TreeNode[];
    level?: number;
    style?: string;
}) {
    const [openNodes, setOpenNodes] = useState<string[]>([]);
    const [allExpanded, setAllExpanded] = useState<boolean>(false);

    const toggleNode = (nodeName: string) => {
        if (openNodes.includes(nodeName)) {
            setOpenNodes(prev => prev.filter(name => name !== nodeName));
        } else {
            setOpenNodes(prev => [...prev, nodeName]);
        }
    };

    return (
        <div className={style}>
            {data.map((node) => (
                <div key={node.name} className={`py-0.5 px-4 ${level > 0 ? `pl-${level * 4}` : ""}`}>
                    <div onClick={() => toggleNode(node.name)} className={`text-md hover:text-gray-300 ${mediumRoboto.className}`}>
                        {/*{node.children ? (*/}
                        {/*    allExpanded || openNodes.includes(node.name) ? (*/}
                        {/*        <MinusSmallIcon className="inline w-3 h-3 mr-1" />*/}
                        {/*    ) : (*/}
                        {/*        <PlusSmallIcon className="inline w-3 h-3 mr-1" />*/}
                        {/*    )*/}
                        {/*) : <MinusSmallIcon className="inline w-3 h-3 mr-1" />}*/}
                        <Link href={node.link ? node.link : '#'}>
                            {node.name}
                        </Link>
                    </div>
                    {node.children && (allExpanded || openNodes.includes(node.name)) && <Tree data={node.children} level={level + 1} />}
                </div>
            ))}
        </div>
    );
};


