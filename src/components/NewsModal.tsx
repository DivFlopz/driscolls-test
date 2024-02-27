import { useMemo } from "react";
import { INews } from "./News.type";
import "./Modal.style.css";


type Props = {
    onClose: () => void;
    data: INews;
}

const NewsModal = (props: Props) => {
    const { onClose, data } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <div>
                    <h3>News Details: </h3>
                    <div>
                        <div>
                            <label>Title: {data.title}</label>
                        </div>
                        <div>
                            <label>Subtitle: {data.subtitle}</label>
                        </div>
                        <div>
                            <label>Publisher: {data.publisher}</label>
                        </div>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsModal;
