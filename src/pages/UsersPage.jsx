import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsersActionCreator} from "../store/actionCreators/usersActionCreator";
import {Link} from "react-router-dom";


function UsersPage() {

    const dispatch = useDispatch();
    const {users} = useSelector((store) => store.usersReducer);


    useEffect(() => {
        dispatch(getUsersActionCreator())
    }, []);


    return (
        <div>
            <h2>Users</h2>

            <ul>
                {users.map(user => (
                    <li>
                        <Link to={`/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersPage;