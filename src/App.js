import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import Profile from "./components/Profile";
import "./App.scss";
import NavCustom from "./components/NavCustom";

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
      <NavCustom />
    </>
  );
}

export default App;
