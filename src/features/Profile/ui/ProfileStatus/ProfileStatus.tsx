import {Typography} from 'antd';
import s from "./ProfileStatus.module.css"
import {StatusArg} from "features/Profile";

const {Paragraph} = Typography;


export const ProfileStatus = ({status, editable, onChange}: {
    status: StatusArg,
    editable: boolean,
    onChange: (status: string) => void
}) => {
    return (
        <div className={s.container}>
            <Paragraph
                editable={editable && {
                    onChange: (value) => onChange(value),
                    text: `${status}`,
                    maxLength: 300,
                    autoSize: {maxRows: 2, minRows: 1},
                }}>
                Status: {status}
            </Paragraph>
        </div>

    );
};

