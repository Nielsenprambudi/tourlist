import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {register} from '../store/actions/ConfigAction';
import { PacmanLoader } from "react-spinners";

const Register = () => {
    const dispatch = useDispatch();
    const {isLoadingRegister, isErrorRegister, isRegister, alertMsgErrorRegister, alertMsgSuccessRegister} = useSelector((state: any) => state?.config);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [invalid, setInvalid] = useState(false);

    const submitRegister = () => {
        dispatch(register({
            name: name,
            email: email,
            password: password
        }));
    }

    return (
        <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {
                                invalid &&
                                <div className="alert alert-danger text-center" role="alert">
                                    {errorMsg}
                                </div>
                            }
                            {isRegister ? (
                                <div className="alert alert-success text-center" role="alert"> 
                                   {alertMsgSuccessRegister}
                                </div>)
                                : isErrorRegister ? 
                                <div className="alert alert-danger text-center" role="alert" >
                                    {alertMsgErrorRegister}
                                </div> 
                                : null
                            }
                            <h1 className="text-center pb-4 pt-3">
                                <div className="text-primary">
                                    <i className="fas fa-lock"></i> Register</div>
                            </h1>
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
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {
                                    !isLoadingRegister ?
                                    <input type="submit" value="Submit" className="btn btn-primary btn-block" onClick={() => submitRegister()} /> :
                                    <PacmanLoader size={15} loading={true} color={'#007bff'} css={'margin: 0 auto; display: block'}/>
                                }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register;