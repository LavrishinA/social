import {Menu} from "antd";
import {items} from "./items.tsx";
import s from "./NavMenu.module.css"
import {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


export const NavMenu: FC<NavMenuArgs> = ({onClick}) => {
    let location = useLocation();
    const [current, setCurrent] = useState(location.pathname );

    useEffect(() => {
        if (location) {
            if( current !== location.pathname ) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    const onClickHandler = (e: any) => {
        setCurrent(e.key)
        onClick()
    }
    return (
        <Menu  selectedKeys={[current]} onClick={onClickHandler} className={s.navMenu} theme={"dark"}  mode="horizontal" items={items} />
    );
};

type NavMenuArgs = {
    onClick: () => void
}
