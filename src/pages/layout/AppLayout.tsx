import {Button, Layout, Tooltip} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "app/store.ts";
import {authActions} from "features/Auth";
import s from "pages/layout/AppLayout.module.css"
import {useEffect} from "react";
import {NavMenu} from 'shared/ui';
import {LogoutOutlined} from "@ant-design/icons";
import {useNotificationAntd} from "shared";


const {Header, Footer, Content} = Layout;

export const AppLayout = () => {
    const {contextHolder, openNotificationWithIcon} = useNotificationAntd()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useAppSelector(state => state.auth.isAuth)


    useEffect(() => {
        dispatch(authActions.isAuthorized()).unwrap().catch(() => {
            navigate('/login')
        })
    }, [dispatch]);


    const onClickMenuHandler = () => {
        if (!isAuth) {
            navigate("/login")
            openNotificationWithIcon("warning", {message: "You are not authorized", description: "Enter email and password"})
        }
    }

    const onLogoutHandler = () => {
        dispatch(authActions.logout())
        navigate("/login")
    }

    return (
        <Layout className={s.layout}>
            <Header>
                <NavMenu onClick={onClickMenuHandler}/>
            </Header>
            <Layout>
                <Content className={s.content}>
                    {contextHolder}
                    <Outlet/>
                </Content>
            </Layout>
            <Footer className={s.footer}>
                {isAuth && <Tooltip title="Logout">
                    <Button type="primary" shape="circle" icon={<LogoutOutlined/>} onClick={onLogoutHandler}/>
                </Tooltip>}


            </Footer>
        </Layout>
    );
};
