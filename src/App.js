import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./components/Profile";
import "./assets/sass/App.scss";
import NavCustom from "./components/NavCustom";
import FooterProfilePage from "./components/FooterProfilePage";
import People from "./components/People";
import TestFetch from "./components/TestFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPerson from "./components/NewPerson";
import Home from "./components/Home";
<<<<<<< HEAD
<<<<<<< HEAD
import MyNetwork from "./components/MyNetwork";
=======
>>>>>>> parent of 9d76391 (Merge branch 'linkedin' into develop)
=======
>>>>>>> parent of 9d76391 (Merge branch 'linkedin' into develop)

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <TestFetch />
        <Container>
          <Row className="d-flex flex-column flex-md-row">
            <Col xs={12} lg={9}>
              <Routes>
                <Route path="/user/me" element={<Profile />} />
                <Route path="user/:userID" element={<NewPerson />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Col>
<<<<<<< HEAD
<<<<<<< HEAD
            <Col xs={12} lg={3} className="people">
              <Routes>
                <Route path="/" element={<People />} />
                <Route path="/user/me" element={<People />} />
              </Routes>
=======
            <Col xs={12} lg={3}>
              <People />
>>>>>>> parent of 9d76391 (Merge branch 'linkedin' into develop)
=======
            <Col xs={12} lg={3}>
              <People />
>>>>>>> parent of 9d76391 (Merge branch 'linkedin' into develop)
            </Col>
          </Row>

          <FooterProfilePage />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
