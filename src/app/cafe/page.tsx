import React from "react";
import { CafeHeader } from "myapp/component/Header/index";
import { CafeButton } from "myapp/component/Button";
import { CafeFooter } from "myapp/component/Footer/index";
import { CafeMenu } from "myapp/component/Menu";
export default function cafe(){
    return(
        <>
        <CafeHeader 
        header="Cafe Top Page" />
        <CafeButton config={"Click Here"} />
        <CafeMenu />
        <CafeFooter />
        </>
    );
}