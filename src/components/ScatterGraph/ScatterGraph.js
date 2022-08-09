import { CartesianGrid, LabelList, ResponsiveContainer, ScatterChart, Scatter, Tooltip, XAxis, YAxis } from "recharts";

const ScatterGraph = () => {

    const data = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ];

    return (
        <div className="scatterGraphContainer">
            <ResponsiveContainer width="100%" height={500}>
                <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={data} fill="#8884d8">
                        <LabelList dataKey="x" />
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ScatterGraph;