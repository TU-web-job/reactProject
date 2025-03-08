import React from "react";
import style from "./CafeHeader.module.css";

interface headerText {
    header:String;
    list_A:String;
    list_B:String;
    list_C:String;
}

export function CafeHeader({header,list_A,list_B,list_C}:headerText){
    return(
        <>
        <div className={style.header}>
            <h1 className={style.text}>{header}</h1>
        </div>
        <div className={style.headerList}>
            <ul className={style.list}>
                <li><a href="#">{list_A}</a></li>
                <li><a href="#">{list_B}</a></li>
                <li><a href="#">{list_C}</a></li>
            </ul>
        </div>
        </>
    );
} 