import './ChartDisplayer.css'
import { Container, Row, Col } from "react-bootstrap";
import $ from 'jquery';
import LineGraph from "../../../components/LineGraph/LineGraph";
import BarGraph from '../../../components/BarGraph/BarGraph';
import AreaGraph from '../../../components/AreaGraph/AreaGraph';
import PieGraph from '../../../components/PieGraph/PieGraph'; 
import ScatterGraph from '../../../components/ScatterGraph/ScatterGraph';
import RadarGraph from '../../../components/RadarGraph/RadarGraph';
import RadialBarGraph from '../../../components/RadialBar/RadialBar';
import LineOfBestFit from '../../../components/LineOfBestFit/LineOfBestFit';
import { useState } from 'react';
const ChartDisplayer = () => {

    const graphDisplay = (graphNum) => {
        switch (graphNum) {
            case 0:
                // Hide charts
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".line")[0].classList.remove("hidden");
                break;
            case 1:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".bar")[0].classList.remove("hidden");
                break;
            case 2:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".area")[0].classList.remove("hidden");
                break;
            case 3:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".pie")[0].classList.remove("hidden");
                break;
            case 4:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".scatter")[0].classList.remove("hidden");
                break;
            case 5:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".radar")[0].classList.remove("hidden");
                break;
            case 6:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".bestFit")[0].classList.add("hidden");
                // Display chart
                $(".radial")[0].classList.remove("hidden");
                break;
            case 7:
                // Hide charts
                $(".line")[0].classList.add("hidden");
                $(".bar")[0].classList.add("hidden");
                $(".area")[0].classList.add("hidden");
                $(".pie")[0].classList.add("hidden");
                $(".scatter")[0].classList.add("hidden");
                $(".radar")[0].classList.add("hidden");
                $(".radial")[0].classList.add("hidden");
                // Display chart
                $(".bestFit")[0].classList.remove("hidden");
                break;
        
            default:
                break;
        }
    }

    const hideGraph = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.add("hidden");
    }

    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col><button className="btn btn-success" onClick={e => graphDisplay(0)}>Line Graph</button></Col>
                    <Col><button className="btn btn-dark" onClick={e => graphDisplay(1)}>Bar Graph</button></Col>
                    <Col><button className="btn btn-warning" onClick={e => graphDisplay(2)}>Area Graph</button></Col>
                    <Col><button className="btn btn-danger" onClick={e => graphDisplay(3)}>Pie Graph</button></Col>
                    <Col><button className="btn btn-info" onClick={e => graphDisplay(4)}>Scatter Graph</button></Col>
                    <Col><button className="btn btn-primary" onClick={e => graphDisplay(5)}>Radar Graph</button></Col>
                    <Col><button className="btn btn-light" onClick={e => graphDisplay(6)}>Radial Bar Graph</button></Col>
                    <Col><button className="btn btn-outline-success" onClick={e => graphDisplay(7)}>Best Fit Graph</button></Col>
                </Row>
                <h3 id="header">Graph Displayer</h3>
                <Row className="displayer">
                    <Col className="line graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <LineGraph />
                    </Col>
                    <Col className="bar graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <BarGraph />
                    </Col>
                    <Col className="area graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <AreaGraph />
                    </Col>
                    <Col className="pie graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <PieGraph />
                    </Col>
                    <Col className="scatter graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <ScatterGraph />
                    </Col>
                    <Col className="radar graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <RadarGraph />
                    </Col>
                    <Col className="radial graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <RadialBarGraph />
                    </Col>
                    <Col className="bestFit graph hidden">
                        <button id="cross" onClick={hideGraph}>❌</button>
                        <LineOfBestFit />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChartDisplayer;