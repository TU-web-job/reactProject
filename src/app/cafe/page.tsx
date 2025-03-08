import React from "react";
import { CafeHeader } from "myapp/component/CafeHeader";
import { CafeButton } from "myapp/component/SubmitButton";
import { CafeFooter } from "myapp/component/CafeFooter";
export default function cafe(){
    return(
        <>
        <CafeHeader 
        header="Top Page!"
        list_A={"問い合わせ"}
        list_B={"会社概要"}
        list_C={"採用情報"} />
        <CafeButton config={"ClickHere"} />
        <CafeFooter />
        </>
        
    );
}