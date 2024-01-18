import {Avatar, Button, ConfigProvider, List, Skeleton} from "antd";
import {User} from "features/Users/api/UsersApi.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";



export const UserList: FC<UserListArgs> = ({loading, items, pageSize, current, total, onChangePage}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    List: {
                        descriptionFontSize: 24,
                        itemPadding: "16px 32px"
                    },
                },
            }}>
                <List
                    loading={{spinning: loading, size: "large"}}
                    itemLayout="horizontal"
                    dataSource={items}
                    pagination={{
                        onChange: (page) => {
                            onChangePage(page)
                        },
                        pageSize,
                        align: "center",
                        showSizeChanger: false,
                        total,
                        current,
                    }}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<Button size={"middle"}>Follow</Button>]}
                        >
                            <Skeleton avatar title={false} loading={loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.photos.small}/>}
                                    title={<Link to={`/profile/${item.id}`}>{item.name}</Link>}

                                    description={item.status}
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
        </ConfigProvider>
    );
};

type UserListArgs = {
    items: User[]
    loading: boolean
    pageSize: number
    current: number
    onChangePage: (pageNumber: number) => void
    total: number
}