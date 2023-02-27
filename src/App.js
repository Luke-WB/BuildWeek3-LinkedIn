import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <Profile />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
