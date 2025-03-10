"use client"
import React, {useState} from "react";
import style from "../styles/CafeContent.module.css";

const DRINK = [
    {title: "Cafe Latte", price: "$4"},
    {title: "espresso", price: "$2.5"}
]

const FOOD = [
    {title: "Sandwich", price: "$3.5"},
    {title: "Pasta", price: "$4.5"}
]

export function CafeMenu(){
    const [itemCounts, setItemCount] = useState<Record<string, number>>({});

    const handleCounts = (title: string, delta: number)=>{
        setItemCount((prev) => ({
            ...prev,
            [title]:Math.max(0,(prev[title] || 0) + delta),
        }));
    };



    return (
        <>
        <h1 className={style.contentsTitle}>Menu</h1>

        {/* drink menu */}
        <h3 className={style.menuContent}>DrinkMenu</h3>
        <div className={style.drinkMenu}>
        {DRINK.map(({title, price}) => {
            return(
                <div key={title} className={style.menuContents}>
                    <h3 className={style.menuTitle}>Menu: {title}</h3>
                    <p className={style.menuPrice}>Price: {price}</p>
                    <div className={style.btnWrapper}>
                        <button type="submit" className={style.minus} onClick={() => handleCounts(title,-1)}>-</button>
                        <label className={style.menuCount}> {itemCounts[title] || 0} </label>
                        <button type="submit" className={style.plus} onClick={() => handleCounts(title,1)}>+</button>
                    </div>
                </div>
            );
        })}
        </div>
        {/* food menu */}
        <h3 className={style.menuContent}>FoodMenu</h3>
        <div className={style.foodMenu}>
        {FOOD.map(({title,price}) => {
            return (
                <div key={title} className={style.menuContents}>
                    <h3 className={style.menuTitle}>Menu: {title}</h3>
                    <p className={style.menuPrice}>Price: {price}</p>
                    <div className={style.btnWrapper}>
                        <button type="submit" className={style.minus} onClick={() => handleCounts(title,-1)}>-</button>
                        <label className={style.menuCount}> {itemCounts[title] || 0} </label>
                        <button type="submit" className={style.plus} onClick={() => handleCounts(title,1)}>+</button>
                    </div>
                </div>
            );
        })}
        </div>
        <div className={style.btnSubmitWrapper}>
            <button type="submit" className={style.btnConfig}><label className={style.btnText}>確 認</label></button>
            <button type="reset" className={style.btnReset}><label className={style.btnText}>リセット</label></button>
        </div>
        </>
    );
}