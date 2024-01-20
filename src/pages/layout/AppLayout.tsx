import {Layout,} from 'antd';
import {Outlet} from "react-router-dom";

const {Header, Footer, Content} = Layout;
import {NavMenu} from 'shared/ui/NavMenu/NavMenu.tsx';
import s from "pages/layout/AppLayout.module.css"
import {useEffect} from "react";
import {useAppDispatch} from "app/store.ts";
import {authActions} from "features/Auth/model/auth-slice.ts";

export const AppLayout = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authActions.isAuthorized())
    }, [dispatch]);
    
    return (
        <Layout className={s.layout}>
            <Header>
                <NavMenu/>
            </Header>
            <Layout>
                <Content className={s.content}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer className={s.footer}>Footer</Footer>
        </Layout>
    );
};
