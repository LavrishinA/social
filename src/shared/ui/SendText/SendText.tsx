import TextArea from "antd/lib/input/TextArea";
import {Button} from "antd";
import s from "./SendText.module.css"
import {ChangeEvent, FC, ReactNode} from "react";

export const SendText: FC<SendTextProps> = ({value, onClick, onChange, icon}) => {

    const userInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value)
    const sendTextHandler = () => onClick(value)

    return (
        <div className={s.container}>
                    <TextArea  onChange={userInputHandler} value={value} className={s.textarea} rows={2} size={"large"}/>
                    <Button shape="circle" type={"primary"}  onClick={sendTextHandler} icon={icon}/>

        </div>
    );
};

type SendTextProps = {
    value: string
    onClick: (text: string) => void
    onChange: (text: string) => void
    icon: ReactNode
}