import { CafeContact } from "myapp/component/CafeContact";
import { CafeFooter } from "myapp/component/CafeFooter";
import { CafeHeader } from "myapp/component/CafeHeader";
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