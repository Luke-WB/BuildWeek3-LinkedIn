import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import Profile from "./components/Profile";
import "./App.scss";
import NavCustom from "./components/NavCustom";
import FooterProfilePage from './components/FooterProfilePage';
import People from './components/People';

function App() {
  return (
    <>
      {" "}
      <NavCustom />
      <Container>
        <Row>
          <Col xs={9}>
            <People/>
            <Profile />
          </Col>
        </Row>
        <FooterProfilePage/>
      </Container>
    </>
  );
  }




export default App;
