import {Avatar, Card, Image} from "antd";
import s from "./UserCard.module.css"
import {FC} from "react";


export const UserCard: FC<UserCardProps> = ({name, avatar, status, photo}) => {
    return (
        <Card className={s.card}

              cover={
                      <Image
                          style={{ width: "15em" }}
                          preview={false}
                          src={photo}
                          alt="profile photo"
                      />
              }>
            <Card.Meta
                className={s.cardMeta}
                avatar={<Avatar src={avatar}/>}
                title={name}
                description={status}
            />
        </Card>
    );
};

type UserCardProps = {
    name: string
    avatar: string
    status: string
    photo: string

}