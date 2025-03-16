"use client"
import React, { useState} from "react";
import style from "/src/component/Recruit/CafeRecruit.module.css";

const EMPLOYEE = [
    {title:"雇用形態", content:"正社員、アルバイト"},
    {title:"仕事内容", content:"キッチン: \n調理、洗い場,\nホール: \n接客・オーダー対応、ドリンク作成"},
    {title:"勤務時間",content:"シフト制\n6:00 ~ 23:00内で 4h~"},
    {title:"給与",content:"正社員 : 23万円~\nアルバイト : 時給 1,200円~\n経験に応じて変動あり。交通費全額支給"},
    {title:"応募条件", content:"正社員: \n経験者優遇、学歴不問、コミュニケーション能力ある人、長期間働ける方 \nアルバイト: \n週2〜、未経験OK、学生・フリーター歓迎"},
    {title:"福利厚生", content:"制服貸与、食事補助あり、賞与あり、社保完備"},
    {title:"募集店舗", content:"東京本店、大阪支店、福岡支店"}
]

export function CafeRecruit(){

    const [form,setForm] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        employmentType: "",
        store:"東京本店"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({...form,[e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("送信内容", form);
        alert("応募完了しました！");
    };

    return (
        <>
            <h3 className={style.header}>募集要項</h3>
            <div className={style.employee}>
                <table className={style.table}>
                    <tbody className={style.tableContent}>
                        {EMPLOYEE.map(({title,content},index) => {
                            return(
                                <tr key={index} className={style.tr}>
                                    <th className={style.th}>{title}</th>
                                    <td className={style.td}>
                                        {content.split("\n").map((line,i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <h3 className={style.header}>応募フォーム</h3>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="name" className={style.formText}>名前</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email" className={style.formText}>メールアドレス</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required/>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="phoneNumber" className={style.formText}>電話番号</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required/>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="employmentType" className={style.formText}>雇用形態</label>
                        <select id="employmentType" name="employmentType" value={form.employmentType} onChange={handleChange}>
                            <option value="正社員">正社員</option>
                            <option value="アルバイト">アルバイト</option>
                        </select>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="store" className={style.formText}>希望勤務地</label>
                        <select id="store" name="store" value={form.store} onChange={handleChange}> 
                            <option value="東京本店">東京本店</option>
                            <option value="大阪支店">大阪支店</option>
                            <option value="福岡支店">福岡支店</option>
                        </select>
                    </div>
                    <div className={style.btn}>
                    <button type="submit" className={style.submitButton}>応募</button>
                    </div>
                    
                </form>                
            </div>
        </>
    );
}