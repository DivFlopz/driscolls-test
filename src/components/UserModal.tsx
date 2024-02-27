import { INews } from "./News.type";
import { IUser } from "./User.type";
import "./Modal.style.css";

type Props = {
    onClose: () => void;
    data: IUser;
}

const UserModal = (props: Props) => {
    const { onClose, data } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <div>
                    <h3>User Data</h3>
                    <div>
                        <div>
                            <label>First Name: {data.firstName}</label>
                        </div>
                        <div>
                            <label>Last Name: {data.lastName}</label>
                        </div>
                        <div>
                            <label>Email Add: {data.email}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserModal
