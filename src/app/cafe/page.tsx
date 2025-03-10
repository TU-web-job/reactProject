import React from "react";
import { CafeHeader } from "myapp/component/CafeHeader";
import { CafeButton } from "myapp/component/SubmitButton";
import { CafeFooter } from "myapp/component/CafeFooter";
import { CafeMenu } from "myapp/component/CafeMenu";
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