import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4000,
            quiz: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            marks: 3000,
            quiz: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            marks: 2000,
            quiz: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            marks: 2780,
            quiz: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            marks: 1890,
            quiz: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 2390,
            quiz: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            marks: 3490,
            quiz: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#f5f5f5" />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;