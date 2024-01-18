import {Layout,} from 'antd';
import {Outlet} from "react-router-dom";
const {Header, Footer, Content} = Layout;
import { NavMenu } from 'shared/ui/NavMenu/NavMenu.tsx';
import s from "app/layout/AppLayout.module.css"





export const AppLayout = () => {
    return (
        <Layout className={s.layout}>
            <Header>
                <NavMenu/>
            </Header>
            <Layout>
                <Content className={s.content}>
                    <Outlet />
                </Content>
            </Layout>
            <Footer className={s.footer}>Footer</Footer>
        </Layout>
    );
};
