import React from "react";
import { CafeHeader } from "myapp/component/Header/index";
import { CafeButton } from "myapp/component/Button";
import { CafeFooter } from "myapp/component/Footer/index";
export default function cafe(){
    return(
        <>
        <CafeHeader 
        header="Cafe Top Page" />
        <p>this is my portfolio</p>
        <CafeFooter />
        </>
    );
}