import React from "react";
import style from "/src/component/CompanyInfo/CafeCompanyInfo.module.css";
import Link from "next/link";

const INFO = [
    {title:"会社名",info:"TS Cafe Japan"},
    {title:"取締役社長",info:"リアクト  ネクストジェース"},
    {title:"資本金",info:"2025万円"},
    {title:"本社所在地",info:"東京都千代田区1-1-1"}
]

const STORE = [
    {name:"東京本店", address:"東京都千代田区1-1-1", tel:"0120-123-123",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18640.536107282238!2d139.7517504383857!3d35.67857299174211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1741972592340!5m2!1sja!2sjp"},
    {name:"大阪支店", address:"大阪府大阪市1-1-1", tel:"0120-010-101", map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209989.52769511528!2d135.32122679181023!3d34.67776955521339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2z44Om44OL44OQ44O844K144Or44O744K544K_44K444Kq44O744K444Oj44OR44Oz!5e0!3m2!1sja!2sjp!4v1741975516662!5m2!1sja!2sjp"},
    {name:"福岡支店", address:"福岡県福岡市1-1-1", tel:"0120-121-212" , map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106292.58457666477!2d130.15263239131278!3d33.64049047348111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541eedd30a39875%3A0x47f9acaa88434d66!2z5qGc5LqV5LqM6KaL44O25rWmIOWkq-WppuWyqQ!5e0!3m2!1sja!2sjp!4v1741975890277!5m2!1sja!2sjp"}
]

export function CafeCompanyInfo() {
    return (
    <div className={style.companyInfo}>
        <table className={style.table}>
            <tbody>
                {INFO.map(({title,info},index) => {
                    return(
                        <tr key={index} className={style.tr}>
                            <th className={style.th}>{title}</th>
                            <td className={style.td}>{info}</td>
                        </tr>
                    );
                })}
                
            </tbody>
        </table>
        <div className={style.storeWrapper}>
            <h2 className={style.storeHeader}>店舗一覧</h2>
            {STORE.map(({name,address,map,tel},index) => {
                return (
                    <div key={index} className={style.storeList}>
                        <div className={style.storeText}> 
                            <h3 className={style.storeName}>{name}</h3>
                            <p className={style.storeAdd}>{address}</p>
                            <p className={style.storeAdd}>Tel : {tel}</p>
                        </div>
                        <div className={style.storeContent}>
                            {map.includes("google.com/maps/embed") ? (
                                <iframe src={map} className={style.storeMap} loading="lazy"></iframe> 
                            ) : (
                                <Link href={map} className={style.storeMap}></Link>
                            )}
                        </div>
                        
                    </div>
                );
            })}
        </div>
    </div>
    );
}