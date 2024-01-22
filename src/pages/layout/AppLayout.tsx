import {Alert, Layout, notification, Spin} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import {NavMenu} from 'shared/ui/NavMenu/NavMenu.tsx';
import s from "pages/layout/AppLayout.module.css"
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "app/store.ts";
import {authActions} from "features/Auth/model/auth-slice.ts";

const {Header, Footer, Content} = Layout;

export const AppLayout = () => {
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
            notification.warning({message: authError})
        }
    }

    return (
        <Layout className={s.layout}>
            <Header>
                <NavMenu onClick={onClickMenuHandler}/>
            </Header>
            <Layout>
                <Content className={s.content}>
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
            <Footer className={s.footer}>Footer</Footer>
        </Layout>
    );
};
