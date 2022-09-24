import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid teal', margin: '20px' }}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Dial;