import {Avatar, Button, ConfigProvider, List, Skeleton} from "antd";
import { UsersListItemArg } from "features/Users";
import {FC} from "react";
import {Link} from "react-router-dom";



export const UserList: FC<UserListArgs> = ({loading, items, pageSize, current, total, onChangePage, onFollow, onUnfollow}) => {
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
                        actions={item.followed ?
                            [<Button disabled={item.entityStatus === "loading"}  onClick={() => onUnfollow(item.id)} size={"middle"}>Unfollow</Button>] :
                            [<Button disabled={item.entityStatus === "loading"}  onClick={() => onFollow(item.id)} size={"middle"}>Follow</Button>]}
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
    items: (UsersListItemArg & {entityStatus: string})[]
    loading: boolean
    pageSize: number
    current: number
    total: number
    onChangePage: (pageNumber: number) => void
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
}