import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Dragon News Home {allNews.length}</h2>
            {
                allNews.map(news =>
                    <NewsSummeryCard key={news.id} news={news}>

                    </NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;