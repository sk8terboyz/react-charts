import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis, Line } from "recharts";

const LineOfBestFit = () => {
    const MAXWIDTH = 180;
    const [data, setData] = useState([
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
        { index: 160, red: 320, blue: 300 },
    ]);

    const [bFL, setBFL] = useState(false);

    const calcAverages = () => {
        let averages = [];
        let indexAvg = 0;
        let redAvg = 0;
        let blueAvg = 0;

        data.forEach(val => {
            if(typeof(val.index) === "number" && typeof(val.red) === "number" && typeof(val.blue) === "number") {
                indexAvg += val.index;
                redAvg += val.red;
                blueAvg += val.blue;
            }
        })
        indexAvg = (indexAvg/(data.length));
        redAvg = (redAvg/(data.length));
        blueAvg = (blueAvg/(data.length));
        
        averages.push(Number(indexAvg.toFixed(2)));
        averages.push(Number(redAvg.toFixed(2)));
        averages.push(Number(blueAvg.toFixed(2)));
        
        return averages;
    }

    const calcSlope = () => {
        let avgs = calcAverages();
        let topRed = 0;
        let topBlue = 0;
        let bottom = 0;
        let redSlope = 0;
        let blueSlope = 0;
        let slopes = [];

        data.forEach(val => {
            if(typeof(val.index) === "number" && typeof(val.red) === "number" && typeof(val.blue) === "number") {
                // calc red
                topRed += Math.round((val.index - avgs[0]) * (val.red - avgs[1]));
                // calc blue
                topBlue += Math.round((val.index - avgs[0]) * (val.blue - avgs[2]));
                // calc bottom
                bottom += Math.round((val.index - avgs[0]) * (val.index - avgs[0]));
            }
        })

        redSlope = Number((topRed/bottom).toFixed(2));
        blueSlope = Number((topBlue/bottom).toFixed(2));

        slopes.push(redSlope);
        slopes.push(blueSlope);

        return slopes;
    }

    const calcYIntercept = () => {
        const avgs = calcAverages();
        const slopes = calcSlope();
        let yIntercepts = []
        
        let redYI = avgs[1]-(avgs[0] * slopes[0]);
        let blueYI = avgs[2]-(avgs[0] * slopes[1]);

        yIntercepts.push(redYI);
        yIntercepts.push(blueYI);
        return yIntercepts;
    }

    const calcLOBF = () => {
        if(!bFL) {
            const yIntercepts = calcYIntercept();
            const slopes = calcSlope();
    
            // set best fit line data points
            setData((old) => [...old, {index: 0, redLine: ((slopes[0]*0)+yIntercepts[0])}, {index: MAXWIDTH, redLine: ((slopes[0]*MAXWIDTH)+yIntercepts[0])}, {index: 0, blueLine: ((slopes[1]*0)+yIntercepts[1])}, {index: MAXWIDTH, blueLine: ((slopes[1]*MAXWIDTH)+yIntercepts[1])}]);
            // stop multiple best fit lines from appearing
            setBFL(true);
            // remove button
            document.getElementsByClassName("calcLOBF")[0].classList.add("disabled");
            document.getElementsByClassName("calcLOBF")[0].textContent = "Already Calculated";

            document.getElementsByClassName("redSlope")[0].innerHTML = `Red Slope: y = (${slopes[0]})x + ${yIntercepts[0].toFixed(2)}`
            document.getElementsByClassName("blueSlope")[0].textContent += `Blue Slope: y = (${slopes[1]})x + ${yIntercepts[1].toFixed(2)}`
        }
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
            <Row>
                <Col>
                    <p className="redSlope"></p>
                </Col>
                <Col>
                    <button className="btn btn-outline-info calcLOBF" onClick={calcLOBF}>Calc Best-Fit Line</button>
                </Col>
                <Col>
                    <p className="blueSlope"></p>
                </Col>
            </Row>
        </div>
    )
}

export default LineOfBestFit;