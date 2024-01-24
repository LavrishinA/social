import {Alert, Button, Layout, Spin, Tooltip} from 'antd';
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
    const isLoading = useAppSelector(state => state.auth.isLoading)
    const authError = useAppSelector(state => state.auth.error)


    useEffect(() => {
        dispatch(authActions.isAuthorized()).unwrap().catch(() => {
            navigate('/login')
        })
    }, [dispatch, isAuth]);


    const onClickMenuHandler = () => {
        if (!isAuth) {
            navigate("/login",)
            openNotificationWithIcon("warning", {message: "You are not authorized", description: "Enter email and password"})
        }
    }

    const onLogoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <Layout className={s.layout}>
            <Header>
                <NavMenu onClick={onClickMenuHandler}/>
            </Header>
            <Layout>
                <Content className={s.content}>
                    {contextHolder}
                    {isLoading ? <Spin fullscreen={true} size={"large"}/> : <Outlet/>}
                    {!isAuth && <Alert
                        message="Warning"
                        description={authError}
                        type="warning"
                        showIcon
                        closable
                    />}
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
