import {Col, Image, Row, Space, Tooltip, Typography, Upload} from "antd";
import {ProfileApi, ProfileArgs} from "features/Profile";
import {FC} from "react";
import {UploadOutlined} from "@ant-design/icons";
import s from "./UserCard.module.css"
import {UploadChangeParam} from "antd/es/upload/interface";


const {Text, Title} = Typography;

export const UserCard: FC<ProfileArgs> = (props) => {

    const uploadHandler = (upload: UploadChangeParam) => {

        let formData = new FormData();
        formData.append("file", upload.fileList[0].originFileObj as Blob)
        console.log(formData)
        ProfileApi.uploadPhoto(formData)
    }

    return (
        <Row justify="center" style={{paddingTop: '24px'}}>

            <Col xs={24} md={18} lg={12}>

                <Row gutter={16}>
                    <Col xs={24} md={12}>

                        <Image
                            src={props.photos?.large ?? "https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                            alt="#"
                            preview={false}
                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                        >

                        </Image>
                        <Tooltip title="Set image">
                            <Upload className={s.upload}

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
                    </Col>
                    <Col xs={24} md={12}>
                        <Space direction="vertical" align="center" style={{padding: '16px'}}>
                            <Title level={2}>{props.fullName}</Title>

                            <Text style={{textAlign: 'center', color: 'gray.700'}}>
                                {props.aboutMe}
                            </Text>

                            <Space
                                direction="horizontal"
                                style={{
                                    width: '100%',
                                    marginTop: '2rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>

                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

