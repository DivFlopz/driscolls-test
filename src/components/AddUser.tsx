import { useState } from "react"
import "./UserForm.style.css"
import { IUser } from "./User.type";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data : IUser) => void;
};

const AddUser = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onFirstNameChangeHnd = (e : any) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHnd = (e : any) => {
        setLastName(e.target.value);
    }
    const onEmailChangeHnd = (e : any) => {
        setEmail(e.target.value);
    }

    const onSubmitBtnClickHnd = (e : any) => {
        e.preventDefault();
        const data : IUser = {
            id: new Date().toJSON().toString(),
            firstName : firstName,
            lastName : lastName,
            email : email
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }

    return (
        <div className="form-container">
            <div>
                <h3>Add User Form</h3>
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
                    <input type="button" value="Add User" onClick={onSubmitBtnClickHnd}/>
                </div>
            </form>
        </div>
    )
}

export default AddUser
