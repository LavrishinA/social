import {Menu} from "antd";
import {items} from "./items.tsx";
import s from "./NavMenu.module.css"
import {FC} from "react";


export const NavMenu: FC<NavMenuArgs> = ({onClick}) => {
    return (
        <Menu onClick={onClick} className={s.navMenu} theme={"dark"}  mode="horizontal" items={items} />
    );
};

type NavMenuArgs = {
    onClick: () => void
}
