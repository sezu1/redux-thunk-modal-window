import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    getDetailUserActionCreator,
    clearUserActionCreator,
    deleteUserActionCreator
} from "../store/actionCreators/usersActionCreator";

function UserDetailPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();

    const {user, loading} = useSelector((store) => store.usersReducer);

    const [modal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getDetailUserActionCreator(id));
        return () => {
            dispatch(clearUserActionCreator());
        }
    }, [])

    if (loading){
        return <div>Loading...</div>;
    }

    function deleteUser(){
        dispatch(deleteUserActionCreator(id)).then(() => {
            navigate("/")
        })
    }

    return (
        <div>
            <h2>Информация о пользователе -{user.name}</h2>
            <button onClick={() => setShowModal(true)}>delete</button>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>

            {modal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <p>Уверены что хотите удалить этого пользователя?</p>
                        <button onClick={()=> deleteUser(id)}>да</button>
                        <button onClick={() => setShowModal(false)}>нет</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDetailPage;