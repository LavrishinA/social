import {Avatar, Card} from "antd";

const {Meta} = Card;

const UserCard = ({name, avatar, status, photo}) => {
    return (
        <Card
            headStyle={{background: "red"}}
            style={{ width: 300 }}
            cover={
                <img
                    alt="profile photo"
                    src={photo}
                />
            }>
            <Meta
                avatar={<Avatar src={avatar}/>}
                title={name}
                description={status}
            />
        </Card
          >
    );
};

export default UserCard;