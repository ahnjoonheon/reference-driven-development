import React from 'react';

interface SkillBarProps {
    skill: string;
    percentage: number;
}

export default function SkillBar ({ skill, percentage } : SkillBarProps) {
    return (
        <div className="w-full py-2">
            <div className="text-gray-700 font-medium">{skill}</div>
            <div className="bg-gray-300 rounded h-4 mt-1">
                <div className={`bg-blue-500 h-4 rounded transition-width duration-300 ease-in-out hover:w-${percentage}/100`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};