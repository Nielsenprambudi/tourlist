import {useEffect, useState} from "react";
import { getprofile, updateProfile } from "../store/actions/ConfigAction";
import { PacmanLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const {isProfile, isUpdateProfile, isLoadingUpdateProfile, isErrorUpdateProfile, 
        profile, dataUser, alertMsgErrorUpdateProfile, alertMsgSuccessUpdateProfile} = useSelector((state: any) => state?.config);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        if(isProfile === false) {
            dispatch(getprofile(dataUser.Id));
        }
        if(isProfile === true) {
            setName(profile?.name);
            setEmail(profile?.email);
            setLocation(profile?.location);
        }
    }, [dispatch, isProfile, dataUser, profile])

    const update = () => {
        dispatch(updateProfile(profile?.id, {
            id: profile?.id,
            name: name,
            email: email,
            location: location
        }))
        
    }
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {isUpdateProfile ? (
                                <div className="alert alert-success text-center" role="alert"> 
                                   {alertMsgSuccessUpdateProfile}
                                </div>)
                                : isErrorUpdateProfile ? 
                                <div className="alert alert-danger text-center" role="alert" >
                                    {alertMsgErrorUpdateProfile}
                                </div> 
                                : null
                            }
                            <h1 className="text-center pb-4 pt-3">
                                <div className="text-primary">Update Profile</div>
                            </h1>
                            <img src={profile?.avatar} className="img-thumbnail" alt="tourlist"/>
                            
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input type="text"
                                        className="form-control"
                                        name="location"
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)} />
                                </div>
                                {
                                    !isLoadingUpdateProfile ?
                                    <input type="submit" value="Submit" className="btn btn-primary btn-block" onClick={() => update()} /> :
                                    <PacmanLoader size={15} loading={true} color={'#007bff'} css={'margin: 0 auto; display: block'}/>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;