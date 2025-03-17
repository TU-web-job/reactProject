import React from "react";
import style from "/src/component/Header/CafeHeader.module.css";
import Link from "next/link";

interface headerText {
    header:String;
}

export function CafeHeader({header}:headerText){
    return(
        <div className={style.header}>
                <h1 className={style.text}>{header}</h1>
                <div className={style.headerTop}><Link href="/cafe" className={style.top}>Top Page</Link></div>
                <ul className={style.headerList}>
                    <Link href="/cafe/contact" className={style.list}>問い合わせ</Link>
                    <Link href="/cafe/companyInfo" className={style.list}>会社情報</Link>
                    <Link href="/cafe/recruit" className={style.list}>採用情報</Link>
                    <Link href="/cafe/menu" className={style.list} >Menu Page</Link>
                </ul>
        </div>
    );
} 