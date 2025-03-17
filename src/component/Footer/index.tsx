import Link from "next/link";
import style from "/src/component/Footer/CafeFooter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faTwitter,faTiktok} from "@fortawesome/free-brands-svg-icons";

export function CafeFooter(){
    return (
        <div className={style.footer}>
            <ul className={style.footerList}>
                <Link href="http://Instagram.com" className={style.list} legacyBehavior><a target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className={style.icon}></FontAwesomeIcon></a></Link>
                <Link href="#" className={style.list} legacyBehavior><a target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className={style.icon}></FontAwesomeIcon></a></Link>
                <Link href="#" className={style.list} legacyBehavior><a target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className={style.icon}></FontAwesomeIcon></a></Link>
            </ul>
        <div className={style.cafeFooter}>
            <p className={style.footerLogo}>&copy;TypeScript Cafe Page</p>
        </div>
        </div>

    );
}