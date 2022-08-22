import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const LineGraph = () => {

    // const data = [
    //     { name: 'Page A', uv: 500},
    //     { name: 'Page B', uv: 3000},
    //     { name: 'Page C', uv: 2000},
    //     { name: 'Page D' },
    //     { name: 'Page E', uv: 1890},
    //     { name: 'Page F', uv: 2390},
    //     { name: 'Page G', uv: 3490},
    // ];
    const data = [
        { name: '1960', pop: 3034949748},
        { name: '1970', pop: 3700437046},
        { name: '1980', pop: 4458003514},
        { name: '1990', pop: 5327231061},
        { name: '2000', pop: 6143493823},
        { name: '2010', pop: 6956823603},
        { name: '2020', pop: 7794798739},
    ];

    return (
        <div className="lineGraphContainer">
            <ResponsiveContainer width="90%" height={500}>
                <LineChart width={500} height={200} data={data} margin={{ top: 10, right: 0, left: 50, bottom: 0,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="pop" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraph;