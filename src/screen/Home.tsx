import { useSelector } from "react-redux";

const Home = () => {
    const {isLogin, dataUser} = useSelector((state: any) => state?.config);
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        {
                            isLogin ?
                            <h1 className="text-center">Welcome {dataUser.Name}</h1> :
                            <h1 className="text-center">Welcome to tourist list</h1>
                        }                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;