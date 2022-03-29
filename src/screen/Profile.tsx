import React, {useEffect, useState} from "react";
import { getprofile } from "../store/actions/ConfigAction";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const {isErrorProfile, profile, dataUser} = useSelector((state: any) => state?.config);

    useEffect(() => {
        dispatch(getprofile(dataUser.Id));
    }, [dispatch])
    return (
        <div>
            this is profile
        </div>
    )
}

export default Profile;