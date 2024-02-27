import { useState } from "react"
import { IUser } from "./User.type";
import "./UserForm.style.css"


type Props = {
    data: IUser;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IUser) => void
}

const EditUser = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;


    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value);
    }
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value);
    }


    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: IUser = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    }

    return (
        <div className="form-container">
            <div>
                <h3>Edit User Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd}></input>
                </div>
                <div>
                    <label>Email Add: </label>
                    <input type="email" value={email} onChange={onEmailChangeHnd}></input>
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Update User" />
                </div>
            </form>
        </div>
    )
}

export default EditUser
