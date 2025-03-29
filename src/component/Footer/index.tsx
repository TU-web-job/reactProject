import Link from "next/link";
import style from "/src/component/Footer/CafeFooter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";


export function CafeFooter(){
    const LINK = [{link:"http://Instagram.com", icon:faInstagram},
        {link:"https://x.com/",icon:faTwitter},
        {link:"https://www.tiktok.com/ja-JP/", icon:faTiktok}
    ]
    return (
        <div className={style.footer}>
            <ul className={style.footerList}>
                {LINK.map(({link,icon},index) => {
                    return(
                        <li className={style.list} key={index}>
                        <Link href={link} target="_blank"><FontAwesomeIcon icon={icon} className={style.icon}></FontAwesomeIcon></Link>
                        </li>
                    );
                })}
            </ul>
        <div className={style.cafeFooter}>
            <p className={style.footerLogo}>&copy;TypeScript Cafe Page</p>
        </div>
        </div>

    );
}