import {Col, Image, Row, Space, Typography} from "antd";
import {ProfileArgs} from "features/Profile";
import {FC, ReactNode} from "react";


const {Text, Title} = Typography;

export const UserCard: FC<ProfileArgs & {children?: ReactNode}> = (props) => {


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
                        {props.children}
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

