import React from "react";
import { HeaderWrapper } from "myapp/component/Header";
import { FooterComponent } from "myapp/component/Footer";
import { Main } from "myapp/component/Main"
import { SubmitButton } from "myapp/component/Button";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <HeaderWrapper HeadText="Page!!" />
      <Main />
      <FooterComponent />
      <SubmitButton Message="Init Click" alertMessage="Success!!!" />
    </div>
    </>
  );
}
