import LineGraph from "../../../components/LineGraph/LineGraph";
import { Container, Row, Col } from "react-bootstrap";
const ChartDisplayer = () => {

    const graphChoice = [
        { name: 'Line Graph', chosen: false},
        { name: 'Bar Graph', chosen: false},
        { name: 'Column Graph', chosen: false},
        { name: 'Pie Graph', chosen: false},
        { name: 'Area Graph', chosen: false},
        { name: 'Scatter Graph', chosen: false},
        { name: 'Radar Graph', chosen: false},
        { name: 'Tree Graph', chosen: false},
        { name: 'Composed Graph', chosen: false},
        { name: 'Funnel Graph', chosen: false},
    ]

    const resetGraphChoice = () => {
        graphChoice.forEach(graph => {
            graph.chosen = false;
        })
    }

    const chooseGraph = (graphNum) => {
        // reset all graphs
        resetGraphChoice();
        // set graph chosen value to true
        graphChoice[graphNum].chosen = true;
    }

    const graphDisplay = () => {
        return (
            <LineGraph />
        )
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col><button className="btn btn-success" onClick={e => chooseGraph(0)}>Line Graph</button></Col>
                    <Col><button className="btn btn-dark" onClick={e => chooseGraph(1)}>Bar Graph</button></Col>
                    <Col><button className="btn btn-warning" onClick={e => chooseGraph(2)}>Column Graph</button></Col>
                    <Col><button className="btn btn-danger" onClick={e => chooseGraph(3)}>Pie Graph</button></Col>
                    <Col><button className="btn btn-info" onClick={e => chooseGraph(4)}>Area Graph</button></Col>
                </Row>
                <Row className="displayer">
                    {graphDisplay}
                </Row>
            </Container>
            {/* <button className="btn btn-outline-info" onClick={graphChoice['Line Graph'].chosen = true}>Line Graph</button> */}
        </div>
    )
}

export default ChartDisplayer;