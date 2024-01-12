import {Layout,} from 'antd';
import {Outlet} from "react-router-dom";
import {NavMenu} from "./NavMenu/NavMenu.tsx";
const {Header, Footer, Content} = Layout;
import s from "./AppLayout..module.css"

export const AppLayout = () => {
    return (
        <Layout className={s.layout}>
            <Header >
                <NavMenu/>
            </Header>
            <Layout>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer className={s.footer}>Footer</Footer>
        </Layout>
    );
};
