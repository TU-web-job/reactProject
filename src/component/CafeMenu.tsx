import { subscribe } from "diagnostics_channel";
import { title } from "process";
import React from "react";
import style from "../styles/CafeContent.module.css";

const DRINK = [
    {title: "Cafe Latte",
     price: "$4"
    },
    {
        title:"espresso",
        price:"$2.5"
    }
]

const FOOD = [
    {title:  "Sandwich",
     price: "$3.5"
    },
    {title: "Pasta",
     price: "$4.5"
    }
]

export function CafeMenu(){
    return (
        <>
        <h1 className={style.contentsTitle}>Menu</h1>
        <div className={style.drinkMenu}>
        {DRINK.map(drink => {
            return(
                <div className={style.menuContents}>
                    <h3 className={style.menuTitle}>Menu: {drink.title}</h3>
                    <p className={style.menuPrice}>Price: {drink.price}</p>
                    <button type="submit" className={style.minus}>-</button><button type="submit" className={style.plus}>+</button>
                </div>
            );
        })}
        </div>
        <div className={style.foodMenu}>
        {FOOD.map(food => {
            return (
                <div className={style.menuContents}>
                    <h3 className={style.menuTitle}>Menu: {food.title}</h3>
                    <p className={style.menuPrice}>Price: {food.price}</p>
                    <button type="submit" className={style.minus}>-</button><button type="submit" className={style.plus}>+</button>
                </div>
            );
        })}
        </div>
        </>
    );
}