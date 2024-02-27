import React, { useState } from 'react'
import './UserList.style.css';
import { IUser } from './User.type';
import UserModal from './UserModal';


type Props = {
    list: IUser[];
    onDeleteClickHnd: (data: IUser) => void;
    onEdit: (data: IUser) => void;
}
const UserList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;

    const [ShowModal, setShowModal] = useState(false);
    const [dataToShow, setdataToShow] = useState(null as IUser | null);

    const viewUser = (data : IUser) => {
        setdataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <article>
                <h2 className='list-header'>User List</h2>
            </article>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                {list.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{`${user.firstName} ${user.lastName}`} </td>
                            <td>{user.email}</td>
                            <td>
                                <div>
                                    <input type='button' value='View' onClick={() => viewUser(user)} />
                                    <input type='button' value='Edit' onClick={() => onEdit(user)}/>
                                    <input type='button' value='Delete' onClick={() => onDeleteClickHnd(user)} />
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </table>
            {ShowModal  && dataToShow !== null && <UserModal onClose={onCloseModal} data={dataToShow} />}
        </div >
    );
};

export default UserList;

