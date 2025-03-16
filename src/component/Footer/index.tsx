import Link from "next/link";
import style from "/src/component/Footer/CafeFooter.module.css"

export function CafeFooter(){
    return (
        <div className={style.footer}>
            <ul className={style.footerList}>
                <Link href="#" className={style.list}>Instagram</Link>
                <Link href="#" className={style.list}>X(旧Twitter)</Link>
                <Link href="#" className={style.list}>TikTok</Link>
            </ul>
        <div className={style.cafeFooter}>
            <p className={style.footerLogo}>&copy;TypeScript Cafe Page</p>
        </div>
        </div>

    );
}