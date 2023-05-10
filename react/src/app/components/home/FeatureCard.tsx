import { Col } from "react-bootstrap";

interface Props {
    title: string;
    description: string;
    imgUrl: string;
}

export const FeatureCard: React.FC<Props> = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4} style={{ flexBasis: "32%", flexGrow: "0", flexShrink: "0" }}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
