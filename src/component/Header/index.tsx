import React from "react";
import style from "/src/component/Header/CafeHeader.module.css";
import Link from "next/link";

interface headerText {
    header:string;
}

const LINK = [{href:"/cafe/contact",title:"問い合わせ"},
    {href:"/cafe/companyInfo",title:"会社情報"},
    {href:"/cafe/recruit",title:"採用情報"},
    {href:"/cafe/menu",title:"Menu Page"}
]

export function CafeHeader({header}:headerText){
    return(
        <div className={style.header}>
                <h1 className={style.text}>{header}</h1>
                <div className={style.headerTop}><Link href="/cafe" className={style.top}>Top Page</Link></div>
                <ul className={style.headerList}>
                    {LINK.map(({href,title},index) => {
                        return(
                            <Link href={href} className={style.list} key={index}>{title}</Link>
                        );
                    })}
                </ul>
        </div>
    );
} 