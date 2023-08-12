import React from "react";
import Head from "next/head";
import SkillBar from "@/components/skill-bar";

export default function Home() {
  return (
    <>
        <main className="w-full mx-auto bg-gray-50">
            <div className="container mx-auto mt-10 p-4">
                <Head>
                    <title>Interactive Infographic with Next.js and TailwindCSS</title>
                </Head>

                <h1 className="text-2xl font-bold mb-4">My Skills:</h1>
                <SkillBar skill="React" percentage={90} />
                <SkillBar skill="Next.js" percentage={80} />
                <SkillBar skill="Node.js" percentage={85} />
                {/* Add more SkillBars as needed */}
            </div>
        </main>
    </>
  )
}
