import React from "react";
import style from "../styles/CafeHeader.module.css";
import Link from "next/link";

interface headerText {
    header:String;
}

export function CafeHeader({header}:headerText){
    return(
        <div className={style.header}>
                <h1 className={style.text}>{header}</h1>
                <ul className={style.headerList}>
                    <Link href="/cafe/contact" className={style.list}>問い合わせ</Link>
                    <Link href="https://www.google.com/" className={style.list}>会社概要</Link>
                    <Link href="#" className={style.list}>採用情報</Link>
                    <Link href="/cafe" className={style.list} >Top Page</Link>
                </ul>
        </div>
    );
} 