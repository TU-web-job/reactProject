import { CafeFooter } from "myapp/component/Footer/index";
import { CafeHeader } from "myapp/component/Header/index";
import { CafeMenu } from "myapp/component/Menu";

export default function Menu() {
    return(
        <>
            <CafeHeader header="Menu Page" />
            <CafeMenu />
            <CafeFooter />
        </>
    );
}