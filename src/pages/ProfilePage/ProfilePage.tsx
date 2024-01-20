import {UserCard} from "features/Profile/ui/UserCard/UserCard.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "app/store.ts";
import {profileActions} from "features/Profile/model/profile-slice.ts";



export const ProfilePage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch()
    const profile = useAppSelector( state => state.profile.profile)

    useEffect(() => {
        if (!id) return
        dispatch(profileActions.fetchProfile(id))
    }, [id]);

    return (
        <>
        <UserCard {...profile}/>
        </>
    );
};
