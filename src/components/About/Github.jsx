import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="blue">Code</strong>
            </h1>
            <GitHubCalendar
                username="lalesi5"
                blockSize={15}
                blockMargin={5}
                color="#0072BD"
                fontSize={17}
            />
        </Row>
    );
}

export default Github;
