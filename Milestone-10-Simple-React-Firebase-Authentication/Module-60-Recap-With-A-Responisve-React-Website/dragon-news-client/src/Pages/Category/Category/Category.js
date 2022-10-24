import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const allNewsCategory = useLoaderData()
    return (
        <div>
            <h2>Category Length {allNewsCategory.length}</h2>
            {
                allNewsCategory.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;