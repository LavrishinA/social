import {Menu} from "antd";
import {items} from "./items.tsx";
import s from "./NavMenu.module.css"


export const NavMenu = () => {
    return (
        <Menu className={s.navMenu} theme={"dark"}  mode="horizontal" items={items} />
    );
};
