import React from "react";
import style from "../styles/CafeHeader.module.css";
import Link from "next/link";

interface headerText {
    header:String;
    list_A:String;
    list_B:String;
    list_C:String;
}

export function CafeHeader({header,list_A,list_B,list_C}:headerText){
    return(
        <div className={style.header}>
                <h1 className={style.text}>{header}</h1>
                <ul className={style.footerList}>
                    <Link href="/" className={style.list}>{list_A}</Link>
                    <Link href="https://www.google.com/" className={style.list}>{list_B}</Link>
                    <Link href="#" className={style.list}>{list_C}</Link>
                </ul>
        </div>
    );
} 