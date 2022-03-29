import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { getTourists, getDetilTourists, addTourists, updateTourists, deleteTourists, clearDetilTourist,
    clearAddTourist, clearUpdateTourist, clearDeleteTourist } from "../store/actions/ConfigAction";
import { Pagination, Modal } from "antd";

const Tourist = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    const [visibleDetil, setVisibleDetil] = useState(false);
    const [condition, setCondition] = useState("Add");
    const [touristname, setTouristName] = useState('');
    const [touristemail, setTouristEmail] = useState('');
    const [touristloc, setTouristLoc] = useState('');
    const [touristid, setTouristId] = useState(0);
    const {isLoadingTourists, tourists, 
        isLoadingAddTourist, isErrorAddTourist,
        isAddTourist, alertMsgErrorAddTourist, alertMsgSuccessAddTourist,
        isLoadingUpdateTourist, isErrorUpdateTourist,
        isUpdateTourist, alertMsgErrorUpdateTourist, alertMsgSuccessUpdateTourist,
        isLoadingDeleteTourist, isErrorDeleteTourist,
        isDeleteTourist, alertMsgErrorDeleteTourist, alertMsgSuccessDeleteTourist,
        isLoadingDetilTourists, touristDetil,
        page, total_pages} = useSelector((state: any) => state?.config);
    
    useEffect(() => {
        dispatch(getTourists(1));
        if(isDeleteTourist) {
            closingModal();
        }
    }, [dispatch, isDeleteTourist]);

    const changePage = (page: number) => {
        dispatch(getTourists(page));
    }

    const updateTable = () => {
        if(condition === "Add") {

            dispatch(addTourists({
                tourist_name: touristname,
                tourist_email: touristemail,
                tourist_location: touristloc
            }))
        } else {
            dispatch(updateTourists({
                id: touristid,
                tourist_name: touristname,
                tourist_email: touristemail,
                tourist_location: touristloc
                
            }, touristid))
        }
        
    }

    const editTourist = (item: any) => {
        setCondition("Edit");
        setVisible(true);
        setTouristId(item.id);
        setTouristEmail(item.tourist_email);
        setTouristName(item.tourist_name);
        setTouristLoc(item.tourist_location);
    }

    const deleteTour = (item: any) => {
        setVisibleConfirm(true);
        setTouristId(item.id);
        setTouristName(item.tourist_name);
    }

    const deleteTourist = () => {
        dispatch(deleteTourists(touristid));
    }

    const detilTourist = (item: any) => {
        setVisibleDetil(true);
        dispatch(getDetilTourists(item?.id));
    }
    
    const closingModal = () => {
        setCondition("Add");
        setVisible(false);
        setVisibleConfirm(false);
        setVisibleDetil(false);
        setTouristId(0);
        setTouristEmail('');
        setTouristName('');
        setTouristLoc('');
        dispatch(clearAddTourist());
        dispatch(clearUpdateTourist());
        dispatch(clearDeleteTourist());
        dispatch(clearDetilTourist());
    }

    return (
        <div className="row">
            <Modal 
                title={`${condition} Tourist`} 
                visible={visible} 
                onCancel={() => closingModal()}
                onOk={() => updateTable()}
                closable={isLoadingAddTourist || isLoadingUpdateTourist ? false : true}
                okButtonProps={{disabled: isLoadingAddTourist || isLoadingUpdateTourist}}
                cancelButtonProps={{disabled: isLoadingAddTourist || isLoadingUpdateTourist}}
                afterClose={() => dispatch(getTourists(1))}
            >
                {isAddTourist ? (
                    <div className="alert alert-success text-center" role="alert"> 
                        {alertMsgSuccessAddTourist}
                    </div>)
                    : isErrorAddTourist ? 
                    <div className="alert alert-danger text-center" role="alert" >
                        {alertMsgErrorAddTourist}
                    </div> 
                    : null
                }
                {isUpdateTourist ? (
                    <div className="alert alert-success text-center" role="alert"> 
                        {alertMsgSuccessUpdateTourist}
                    </div>)
                    : isErrorUpdateTourist ? 
                    <div className="alert alert-danger text-center" role="alert" >
                        {alertMsgErrorUpdateTourist}
                    </div> 
                    : null
                }
                <div className="form-group">
                    <label htmlFor="touristname">Tourist Name</label>
                    <input type="text"
                        className="form-control"
                        name="touristname"
                        required
                        value={touristname}
                        onChange={(e) => setTouristName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="touristemail">Tourist Email</label>
                    <input type="text"
                        className="form-control"
                        name="touristemail"
                        required
                        value={touristemail}
                        onChange={(e) => setTouristEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="touristloc">Tourist Location</label>
                    <input type="text"
                        className="form-control"
                        name="touristloc"
                        required
                        value={touristloc}
                        onChange={(e) => setTouristLoc(e.target.value)} />
                </div>
            </Modal>
            <Modal 
                title={`Delete Tourist ${touristname}`} 
                visible={visibleConfirm} 
                onCancel={() => closingModal()}
                onOk={() => deleteTourist()}
                closable={isLoadingDeleteTourist ? false : true}
                okButtonProps={{disabled: isLoadingDeleteTourist}}
                cancelButtonProps={{disabled: isLoadingDeleteTourist}}
                afterClose={() => dispatch(getTourists(1))}
            >
                
                {isDeleteTourist ? (
                    <div className="alert alert-success text-center" role="alert"> 
                        {alertMsgSuccessDeleteTourist}
                    </div>)
                    : isErrorDeleteTourist ? 
                    <div className="alert alert-danger text-center" role="alert" >
                        {alertMsgErrorDeleteTourist}
                    </div> 
                    : null
                }
                <h1 className="text-center">Are you sure want to delete this data?</h1>
            </Modal>
            <Modal 
                title={`Detail Tourist`} 
                visible={visibleDetil} 
                onCancel={() => closingModal()}
                footer={[
                    <button type="button" className="btn btn-default" onClick={() => closingModal()}>
                        Ok
                    </button>
                ]}
            >
                {
                    isLoadingDetilTourists ?
                    <PacmanLoader size={15} loading={true} color={'#007bff'} css={'margin: 0 auto; display: block'}/> :
                    <div>
                        <img src={touristDetil?.tourist_profilepicture} className="img-thumbnail" alt="tourlist"/>
                        <div>
                            <div>Name : {touristDetil?.tourist_name}</div>
                            <div>Email : {touristDetil?.tourist_email}</div>
                            <div>Location : {touristDetil?.tourist_location}</div>
                        </div>
                    </div>
                }
            </Modal>
            <div className="col-md-12 col-sm-12 col-lg-12">
                <h1 className="text-center">List of Tourists</h1>
                <button onClick={() => setVisible(true)} type="button" className="btn btn-primary" style={{marginBottom: 5, float: 'right'}}>Add new tourist</button>
                {
                    isLoadingTourists ?
                    <PacmanLoader size={35} loading={true} color={'#007bff'} css={'margin: 0 auto; display: block'}/> :
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tourists.map((item: any, i: number) => (
                                    <tr style={{cursor: 'pointer'}} onClick={() => detilTourist(item)} key={i}>
                                        <td>{item.tourist_name}</td>
                                        <td>{item.tourist_email}</td>
                                        <td>{item.tourist_location}</td>
                                        <td>
                                            <div className="row">
                                                <div data-toggle="tooltip" data-placement="top" title="Edit Data" className="col-md-6 col-sm-6 col-lg-6">
                                                    <i onClick={() => editTourist(item)}  style={{cursor: 'pointer'}} className="fas fa-pen"></i>
                                                </div>
                                                <div data-toggle="tooltip" data-placement="top" title="Delete Data" className="col-md-6 col-sm-6 col-lg-6">
                                                    <i onClick={() => deleteTour(item)} style={{cursor: 'pointer'}} className="fas fa-trash"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
                <div style={{marginTop: 10}}>
                    <Pagination defaultCurrent={page} total={total_pages} showSizeChanger={false} onChange={(page) => changePage(page)}/>
                </div>
                    
            </div>
        </div>
    )
}

export default Tourist;