import {Tooltip, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {UploadChangeParam} from "antd/es/upload/interface";

type Props = {
    onUpload: (data: FormData)=> void
}

export const UploadImage = ({onUpload}: Props) => {

    const uploadHandler = (upload: UploadChangeParam) => {
        let formData = new FormData();
        formData.append("file", upload.fileList[0].originFileObj as Blob)
        onUpload(formData)
    }
    return (
        <Tooltip title="Set image">
            <Upload
                    accept={"image/jpeg"}
                    showUploadList={false}
                    onChange={uploadHandler}
                    beforeUpload={() => false}
                    multiple={true}
                    maxCount={1}
            >
                <UploadOutlined style={{color: "#1890ff"}}/>
            </Upload>
        </Tooltip>
    );
};

