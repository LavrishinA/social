import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "app/store.ts";
import {profileActions, ProfileStatus, UserCard} from "features/Profile";
import {useNotificationAntd} from "shared";


export const ProfilePage = () => {
    const {id} = useParams()
    const {contextHolder, openNotificationWithIcon} = useNotificationAntd()
    const dispatch = useAppDispatch()
    const authProfile = useAppSelector(state => state.auth.user.id)
    const profile = useAppSelector(state => state.profile.profile)
    const status = useAppSelector(state => state.profile.status)


    useEffect(() => {
        if (id) {
            dispatch(profileActions.fetchProfile(Number(id)))
            dispatch(profileActions.fetchStatus(Number(id)))
        } else if (authProfile) {
            dispatch(profileActions.fetchProfile(authProfile))
            dispatch(profileActions.fetchStatus(authProfile))
        }
    }, [id, authProfile]);

    const statusHandler = (status: string) => dispatch(profileActions.updateStatus(status)).unwrap()
        .then(() => openNotificationWithIcon("success", {message: "Status updated"}))
        .catch(e => openNotificationWithIcon ("error", {message: e.message}))

    return (
        <>
            {contextHolder}
            <UserCard {...profile}/>
            <ProfileStatus editable={!id} status={status} onChange={statusHandler}/>
        </>
    );
};
