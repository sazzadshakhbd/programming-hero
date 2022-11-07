import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle("Home")
    return (
        <div>
            <h2>Dragon News Home {allNews.length}</h2>
            {
                allNews.map(news =>
                    <NewsSummeryCard key={news._id} news={news}>

                    </NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;