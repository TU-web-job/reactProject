import React from "react";
import { CafeHeader } from "myapp/component/Header/index";
import { CafeCompanyInfo } from "myapp/component/CompanyInfo";
import { CafeFooter } from "myapp/component/Footer/index";
export default function Home() {
  return (
      <div>
        <CafeHeader header="会社概要"/>
        <CafeCompanyInfo />
        <CafeFooter />
      </div>
  );
}
