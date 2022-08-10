import { useEffect, useState } from "react";
import { CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis, Line } from "recharts";

const LineOfBestFit = () => {
    const data = [
        { index: 10, red: 100, blue: 200 },
        { index: 20, red: 120, blue: 100 },
        { index: 30, red: 170, blue: 300 },
        { index: 40, red: 140, blue: 250 },
        { index: 50, red: 150, blue: 400 },
        { index: 60, red: 110, blue: 280 },
        { index: 70, red: 10, blue: 20 },
        { index: 80, red: 50, blue: 40 },
        { index: 90, red: 143, blue: 260 },
        { index: 100, red: 288, blue: 175 },
        { index: 110, red: 200, blue: 435 },
        { index: 120, red: 90, blue: 370 },
        { index: 130, red: 167, blue: 130 },
        { index: 140, red: 150, blue: 150 },
        { index: 150, red: 140, blue: 140 },
        { index: 20, redLine: 0},
        { index: 200, redLine: 200},
        { index: 40, blueLine: 0},
        { index: 200, blueLine: 400},
    ];

    const [redSlope, setRedSlope] = useState();
    const [blueSlope, setBlueSlope] = useState();
    const [avgIndex, setAvgIndex] = useState();
    const [avgRed, setAvgRed] = useState();
    const [avgBlue, setAvgBlue] = useState();
    const [yIntercept, setYIntercept] = useState();

    const calcSlope = async () => {
        console.log(data);
        let indexSum = 0; 
        let redSum = 0;
        let blueSum = 0;
        for(let i = 0; i < (data.length-4); i++) {
            indexSum += data[i].index;
            redSum += data[i].red;
            blueSum += data[i].blue;
        }
        // await has no effect on these calls
        setAvgIndex(indexSum / (data.length - 4));
        setAvgRed(redSum / (data.length - 4));
        setAvgBlue(blueSum / (data.length - 4));

        // need to wait for averages to be set before we can continue
        // maybe timeout for half a second works?
        await setTimeout(() => {
            console.log("averages loaded?");
        }, 500);

        let red = 0;
        let blue = 0; 
        let bottom = 0;
        // calc slopes
        for(let i = 0; i< (data.length-4); i++) {
            red += ((data[i].index-avgIndex)*(data[i].red));
            blue += ((data[i].index-avgIndex)*(data[i].blue));
            bottom += ((data[i].index-avgIndex)*(data[i].index-avgIndex));
        }

        setRedSlope(red/bottom);
        setBlueSlope(blue/bottom);

        console.log(redSlope);
        console.log(blueSlope);
        // avgIndex = all index values added / 15
        // avgRed = all reds added / 15
        // avgBlue = all blues added / 15
        // slope calculation #1: (sum((index - avgIndex)(red-avgRed)))/(sum(avgIndex*avgIndex)))
        // slope calculation #2: (sum((index - avgIndex)(blue-avgBlue)))/(sum(avgIndex*avgIndex)))
    }

    const calcYIntercept = async () => {
        console.log("Y Intercept");
        await calcSlope();
        // y-intercept calculation: (y-[sum of all y's / amount of y's]) = a(x-[sum of all x's / amount of x's]) + b
        // a = slope
        // return b
    }

    const getLOBF = async () => {
        await calcYIntercept();
        console.log("Line Of Best Fit");
        // call calcYIntercept which calls calcSlope
        // add index and line values to data
    }

    return (
        <div className="lobfContainer">
            <ResponsiveContainer width="100%" height={500}>
                <ComposedChart width={500} height={400} data={data} margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="index" type="number" label={{ value: 'Index', position: "insideBottomRight", offset: -10 }} />
                    <YAxis unit="ms" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft', offset: -10 }} />
                    <Scatter name="red" dataKey="red" fill="red" />
                    <Scatter name="blue" dataKey="blue" fill="blue" />
                    <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
                    <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
                </ComposedChart>
            </ResponsiveContainer>
            <button className="btn btn-outline-info" onClick={getLOBF}>Calc Best-Fit</button>
        </div>
    )
}

export default LineOfBestFit;