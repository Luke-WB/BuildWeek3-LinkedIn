import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import Profile from "./components/Profile";
import "./App.scss";
import NavCustom from "./components/NavCustom";
import FooterProfilePage from "./components/FooterProfilePage";
import People from "./components/People";
import TestFetch from "./components/TestFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPerson from "./components/NewPerson";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <TestFetch />
        <Container>
          <Row>
            <Col xs={12} md={9}>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="user/:userID" element={<NewPerson />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Col>
            <Col xs={12} lg={3}>
              <People />
            </Col>
          </Row>
          <FooterProfilePage />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
