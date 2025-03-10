import React from "react";
import style from "../styles/CafeContact.module.css";
import { title } from "process";

const CONTACT = [
    {title:"Name",holder:"XXX YYY"},
    {title:"Address",holder:"Tokyo, JAPAN"},
    {title:"Age", holder:"20 years old"},
    {title:"Email", holder:"xx@xxx.com"},
    {title:"PhoneNumber", holder:"xxx-xxxx-xxxx"}
]

export function CafeContact(){
    return (
        <div className={style.contact}>
            <h3 className={style.title}>お問い合わせフォーム</h3>
            <div className={style.tableWrapper}>
            <table className={style.table}>
                <tbody>
                    {CONTACT.map(({title,holder},index) => {
                        return (
                            <tr key={index} className={style.tr}>
                            <th className={style.th}>{title}</th>
                            <td className={style.td}><input type="text" className={style.input} placeholder={holder} /></td>
                            </tr>
                        );                
                    })}
                <tr className={style.tr}>
                    <th className={style.th}>Something Here</th>
                    <td className={style.td}><textarea className={style.textarea} placeholder="お問い合わせ内容"></textarea></td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={style.submit}>
                <button type="submit" className={style.btnContact}>送信</button>
            </div>
        </div>
    );
}