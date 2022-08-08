import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h4>Common Graphs</h4>
                    <Col><button type="button" className="btn btn-outline-info"><Link to="/chartDisplay">Line Graph</Link></button></Col>
                    <Col><button type="button" className="btn btn-outline-info">Bar Graph</button></Col>
                    <Col><button type="button" className="btn btn-outline-info">Column Graph</button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;