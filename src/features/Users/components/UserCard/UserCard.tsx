import {Button, Col, Image, Row, Space, Typography} from "antd";
import {FC} from "react";


const {Text, Title} = Typography;

export const UserCard: FC<UserCardProps> = ({name, status, photo}) => {
    return (
        <Row justify="center" style={{paddingTop: '24px'}}>
            <Col xs={24} md={18} lg={12}>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Image
                            src={photo}
                            alt="#"
                            preview={false}
                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Space direction="vertical" align="center" style={{padding: '16px'}}>
                            <Title level={2}>{name}</Title>

                            <Text style={{textAlign: 'center', color: 'gray.700'}}>
                                {status}
                            </Text>

                            <Space
                                direction="horizontal"
                                style={{
                                    width: '100%',
                                    marginTop: '2rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                <Button
                                    type="primary"
                                    ghost
                                    shape="round"
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'blue.400',
                                        color: '#444',
                                        boxShadow:
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)',
                                    }}>
                                    Follow
                                </Button>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

type UserCardProps = {
    name: string
    status: string
    photo: string
}