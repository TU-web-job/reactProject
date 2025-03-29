import React from "react";
import { HeaderWrapper } from "myapp/component/Header";
import { SubmitButton } from "myapp/component/Button";
import Link from "next/link";


export default function Home() {
    const LINK = [{link:"/cafe", title:"Cafe Top Page"},
        {link:"", title:"test"}
    ]
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <ul>
    {LINK.map(({link,title},index) => {
        return (
            <li key={index}>
            <Link href={link}>{title}</Link>
            </li>
        );
    })}
    </ul>
      <SubmitButton Message="Init Click" alertMessage="Success!!!" />
    </div>
    </>
  );
}
