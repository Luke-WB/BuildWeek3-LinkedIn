import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
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
