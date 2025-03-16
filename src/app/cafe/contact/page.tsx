import { CafeContact } from "myapp/component/Contact";
import { CafeFooter } from "myapp/component/Footer/index";
import { CafeHeader } from "myapp/component/Header/index";
import React from "react";

export default function Home() {
    return (
        <>
        <CafeHeader 
          header="Contact Page"
        />
        <CafeContact />
        <CafeFooter />
        </>
    );
}