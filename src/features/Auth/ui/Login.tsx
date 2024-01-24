import {Button, Checkbox, Form, Input} from "antd";
import s from "./Login.module.css"
import {SubmitHandler, useForm} from "react-hook-form"
import {FormItem} from "react-hook-form-antd";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {useAppDispatch} from "app/store.ts";
import {authActions} from "features/Auth/model/auth-slice.ts";
import {useNavigate} from "react-router-dom";
import { useNotificationAntd } from "shared";


const schema = yup
    .object()
    .shape({
        email: yup.string().required("Yo! Enter you email!").email(),
        password: yup.string().required("It's required").min(3, "It's to short!"),
        rememberMe: yup.boolean().optional()
    })
    .required()

export const Login = () => {
    const {control, handleSubmit} = useForm({
        defaultValues: {email: "", password: "", rememberMe: false},
        resolver: yupResolver(schema)
    })
    const {contextHolder, openNotificationWithIcon} = useNotificationAntd()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submitHandler: SubmitHandler<FieldType> = (data) => {
        dispatch(authActions.login(data)).unwrap()
            .then(() => navigate("/profile"))
            .catch(e => openNotificationWithIcon("error", {message: e.error}))
    }

    return (

        <div className={s.form}>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                autoComplete="off"
                onFinish={handleSubmit(submitHandler)}
            >
                <FormItem
                    label="Email"
                    name="email"
                    control={control}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label="Password"
                    name="password"
                    control={control}
                    required
                >
                    <Input.Password/>
                </FormItem>

                <FormItem
                    name="rememberMe"
                    valuePropName="checked"
                    wrapperCol={{offset: 8, span: 16}}
                    control={control}
                >
                    <Checkbox>Remember me</Checkbox>
                </FormItem>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form></div>

    );
};

export type FieldType = {
    email: string
    password: string
    rememberMe?: boolean
}