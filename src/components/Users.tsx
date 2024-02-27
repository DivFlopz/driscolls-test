import "./Users.style.css";
import { useState } from "react";
import { IUser, PageEnum, dummyUserList } from "./User.type";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";


function Users() {

    const [userList, setUserList] = useState(dummyUserList as IUser[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IUser);

    const onAddUserClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const addUserHnd = (data: IUser) => {
        setUserList([...userList, data]);
    };

    const deleteUser = (data : IUser) => {
        const indexToDelete = userList.indexOf(data);
        const tempList =[ ...userList]

        tempList.splice(indexToDelete, 1);
        setUserList(tempList);
    }

    const editUserData = (data : IUser) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    }

    const updateData = (data: IUser) => {
        const filteredData = userList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = userList.indexOf(filteredData);
        const tempData = [...userList];
        tempData[indexOfRecord] = data;
        setUserList(tempData);
    }

    return (
        <>
            <article className='article-header'>
                <header>
                    <h1>Driscoll's Test CRUD</h1>
                </header>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <UserList list={userList} onDeleteClickHnd={deleteUser} onEdit={editUserData} />
                        <input type="button" 
                        value="Add User" 
                        onClick={onAddUserClickHnd} 
                        className="add-user-btn"/>
                    </>
                )}
                {shownPage === PageEnum.add && (<AddUser onBackBtnClickHnd={showListPage} onSubmitClickHnd={addUserHnd} />)}

                {shownPage === PageEnum.edit && <EditUser data={dataToEdit } onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />}
            </section>
        </>
    )
}

export default Users;
