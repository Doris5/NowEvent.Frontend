import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FeatureCard } from './FeatureCard';
import projImg1 from "../images/budget.jpg";
import projImg2 from "../../images/guest-list.jpg";
import projImg3 from "../../images/date-time.jpg";
import projImg4 from "../images/inspiration.jpg";
import '../../layout/features.css';
import TrackVisibility from 'react-on-screen';



interface Feature {
    title: string;
    description: string;
    imgUrl: string;
}

export const Features: React.FC = () => {
    const features: Feature[] = [
        {
            title: "Guests",
            description: "Manage your guest list",
            imgUrl: projImg2,
        },
        {
            title: "Where and when?",
            description: "Set the date and place for your event",
            imgUrl: projImg3,
        },
        {
            title: "Theme",
            description: "Something oldschool? Something modern? Your choice!",
            imgUrl: projImg2,
        },
        {
            title: "Budget",
            description: "Keep an eye on your expenses",
            imgUrl: projImg3,
        },
        {
            title: "Summary",
            description: "All the important information in one place",
            imgUrl: projImg2,
        },
        {
            title: "Your opinion",
            description: "Rate your experience and help other with their choice",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="features" id="features">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Features</h2>
                                    <p>Here are a bunch of features that will help you with planning your party:</p>
                                    <Tab.Container id="features-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Row style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", gap: "10px", width: "80%", margin: "0 auto" }}>
                                                {
                                                    features.map((project, index) => {
                                                        return (
                                                            <FeatureCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};