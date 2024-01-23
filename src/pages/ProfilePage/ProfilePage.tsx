import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "app/store.ts";
import {UserCard, profileActions} from "features/Profile";




export const ProfilePage = () => {
    const { id } = useParams();
debugger
    const dispatch = useAppDispatch()
    const profile = useAppSelector( state => state.profile.profile)

    useEffect(() => {
        if (!id) return
        dispatch(profileActions.fetchProfile(id))
    }, []);

    return (
        <>
        <UserCard {...profile}/>
        </>
    );
};
