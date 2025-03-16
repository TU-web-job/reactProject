import { CafeFooter } from "myapp/component/Footer/index";
import { CafeHeader } from "myapp/component/Header/index";
import { CafeRecruit } from "myapp/component/Recruit";
import React from "react";


export default function Home() {
    return (
        <>
        <CafeHeader header="Recruit Page" />
        <CafeRecruit />
        <CafeFooter />
        </>
    )
}