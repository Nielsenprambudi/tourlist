import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {login, clearLogin} from './../store/actions/ConfigAction';
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoadingLogin, isErrorLogin, isLogin, alertMsgErrorLogin, alertMsgSuccessLogin} = useSelector((state: any) => state?.config);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = () => {

        dispatch(login({
            email: email,
            password: password
        }))
    }

    const onCloseModal = () => {
        if(isLogin) {
            navigate('/');
        } else {
            dispatch(clearLogin());
        }
    }

    

    return (
        <div className="row">
            <Modal
                visible={isErrorLogin || isLogin}
                closable={false}
                footer={[
                    <button onClick={() => onCloseModal()} type="button" className="btn btn-default">
                        Ok
                    </button>
                ]}
            >
                <div>{alertMsgErrorLogin || alertMsgSuccessLogin}</div>
            </Modal>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">

                    <h1 className="text-center pb-4 pt-3">
                        <div className="text-primary">
                            <i className="fas fa-lock"></i> Login</div>
                    </h1>

                        <div className="form-group">
                            <label htmlFor="identity">Email</label>
                            <input type="text"
                                className="form-control"
                                name="identity"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
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
                            !isLoadingLogin ?
                            <input type="submit" value="Submit" className="btn btn-primary btn-block" onClick={() => submitLogin()} /> :
                            <PacmanLoader size={15} loading={true} color={'#007bff'} css={'margin: 0 auto; display: block'}/>
                        }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;