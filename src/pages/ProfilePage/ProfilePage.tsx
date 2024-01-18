import {UserCard} from "features/User/ui/UserCard/UserCard.tsx";
import {useParams} from "react-router-dom";


export const ProfilePage = () => {
    let { userId } = useParams();


    return (
        <>
        <UserCard name={"Luke"} status={"OK"} photo={"some foto"}/>
        </>
    );
};
