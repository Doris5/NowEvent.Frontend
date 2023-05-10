import React from 'react';
import '../../layout/benefit.css';
import benefit1 from "../../images/benefit1.svg";
import benefit2 from "../../images/benefit2.svg";
import benefit3 from "../../images/benefit3.svg";
import { Box, Container } from '@mui/material';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Benefit: React.FC = () => {
    return (
        <section id='benefit'>
            <Container>
                <div className="benefit">
                    <h1 className="header-title">Benefits</h1>
                    <div className="container">
                        <Row>
                            <Col cs={12} md={6} xl={7} className="items-center">
                                <div className="card">
                                    <div className="card-top">
                                        <h2>Time saving</h2>
                                        <img src={benefit3} alt="time saving icon" />
                                    </div>
                                    <div className="card-center">
                                        Creating a new event is quick and uncomplicated. Save time and increase efficiency with us!
                                    </div>
                                    <div className="card-bottom">
                                        <Nav.Link as={Link} to="/event">
                                            <button>Get Started</button>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col cs={12} md={6} xl={7} className="items-center">
                                <div className="card">
                                    <div className="card-top">
                                        <h2>Comfortable</h2>
                                        <img src={benefit2} alt="comfortable icon" />
                                    </div>
                                    <div className="card-center">
                                        You can create your dream event without leaving home, and let someone else do all the job.
                                    </div>
                                    <div className="card-bottom">
                                        <Nav.Link as={Link} to="/event">
                                            <button>Get Started</button>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col cs={12} md={6} xl={7} className="items-center">
                                <div className="card">
                                    <div className="card-top">
                                        <h2>Happiness</h2>
                                        <img src={benefit1} alt="happiness icon" />
                                    </div>
                                    <div className="card-center">
                                        You can have fun without the stress of planning and organizing your event. Finally!
                                    </div>
                                    <div className="card-bottom">
                                        <Nav.Link as={Link} to="/event">
                                            <button>Get Started</button>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Benefit;
