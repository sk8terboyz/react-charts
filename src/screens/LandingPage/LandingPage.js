import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h4>Welcome to the Graph Displayer</h4>
                    <Col><button type="button" className="btn btn-outline-info"><Link to="/chartDisplay">Go To Graphs</Link></button></Col>
                </Row>
                <Row>
                    <p>Graphs are a necessary visual respresentation for any professional level presentation, so why not upgrade to making them yourself digitally.</p>
                    <p>With the help of the recharts library, most any type of chart/graph can be added to your website!</p>
                    <p>This is not affiliated with reacharts or react in any way. I am just a guy enjoying learning how to create them too.</p>
                </Row>
                <Row>
                    <h5>Dropdowns:</h5>
                    <Col><button type="button" className="btn btn-outline-info"><Link to="/buttonWorkshop">Go To Buttons</Link></button></Col>
                </Row>
                <Row>
                    <p>Creating dropdown/accordions that are triggered by a button click are very useful for creating good looking & efficient webpages.</p>
                    <p>I use multiple different styles to accomplish the creation of the accordion and the buttons that trigger them.</p>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;