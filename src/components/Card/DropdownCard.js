import { useState } from 'react';
import { Button, Card, Col, Collapse, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DropdownCard = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Container>
                <Row>
                    <Row className='justify-content-md-center'>
                        <Col md={3}>
                            <h5>Website Name & Link</h5>
                        </Col>
                        <Col md={1}>
                            <Button onClick={() => setOpen(!open)} aria-controls="cardData" aria-expanded={open} variant="info">
                                {open ? "+" : "-"}
                            </Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={4}>
                            <div style={{ minHeight: '150px' }}>
                                <Collapse in={open} dimension="height">
                                    <div id="cardData">
                                        <Card>
                                            <Card.Body>
                                                <ul style={{ listStyleType:"none", padding:"0", margin:"0"}}>
                                                    <li>Trigger: status</li>
                                                    <li>Lock: data</li>
                                                    <li>Trigger: status</li>
                                                    <li>Lock: data</li>
                                                    <li>Trigger: status</li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default DropdownCard;