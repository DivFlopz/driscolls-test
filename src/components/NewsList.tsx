import React, { useState } from 'react'
import NewsModal from './NewsModal';
import { INews } from './News.type';


type Props = {
    list: INews[];

}
const NewsList = (props: Props) => {
    const { list } = props;

    const [ShowModal, setShowModal] = useState(false);
    const [dataToShow, setdataToShow] = useState(null as INews | null);

    const viewNews = (data: INews) => {
        setdataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <article>
                <h2 className='list-header'>News Dashboard</h2>
            </article>
            <table>
                <tr>
                    <th>News Title</th>
                    <th>Details</th>
                </tr>
                {list.map(news => {
                    return (
                        <tr key={news.id}>
                            <td>{`${news.title} ${news.subtitle}`} </td>
                            <td>{news.publisher}</td>
                            <td>
                                <div>
                                    <input type='button' value='View' onClick={() => viewNews(news)} />
                                </div>
                            </td>
                        </tr>
                    );
                })}
                {ShowModal && dataToShow !== null && <NewsModal onClose={onCloseModal} data={dataToShow} />}
            </table>
        </div >
    );
};

export default NewsList;

