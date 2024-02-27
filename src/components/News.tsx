import React, { useState } from 'react'
import "../components/Users.style.css";
import "./Users.style.css";
import NewsList from './NewsList';
import { INews, PageEnum, dummyNewsList  } from './News.type';


const News = () => {
    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [newsList, setNewsList] = useState(dummyNewsList as INews[]);

    return (
        <div>
            <article className='article-header'>
                <header>
                    <h1>Driscoll's Test News Section</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <NewsList list={newsList} />
                    </>
                )}
            </section>
        </div>
    )
}

export default News