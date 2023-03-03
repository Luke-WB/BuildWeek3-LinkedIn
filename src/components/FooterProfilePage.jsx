import { Col, Container, Form, Row } from "react-bootstrap";
import logo from "../assets/Linkedin-Logo-2003.png";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FooterProfilePage() {
  return (
    <>
      <Container>
        <footer className="py-5">
          <Row>
            <Col xs={6} md={2} className="mb-3">
              <img src={logo} width={"90px"} alt="linkedLogo" />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Community Guidelines
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Privacy & Terms
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Sales Solutions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Safety Center
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mt-5">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Accessibility
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Careers
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Ad Choices
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Mobile
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mt-5">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Talent Solutions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Marketing Solutions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Advertising
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Small Business
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mt-5">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <h5>
                    <BsFillQuestionCircleFill /> Questions?
                  </h5>
                  <p>Visit our Help Center.</p>
                </li>
                <li className="nav-item mb-2">
                  <h5>
                    <AiFillSetting /> Manage your account and privacy
                  </h5>
                  <p>Go to your Settings.</p>
                </li>
              </ul>
            </Col>

            <Col md={3} className="offset-md-1 mb-3 mt-5">
              <Form>
                <p>Select Language</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select languages</option>
                    <option value="1">English</option>
                    <option value="2">Español</option>
                    <option value="3">Italiano</option>
                  </Form.Select>
                </div>
              </Form>
            </Col>
          </Row>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>LinkedIn Corporation &copy; 2023</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <svg className="bi" width="24" height="24"></svg>
              </li>
              <li className="ms-3">
                <svg className="bi" width="24" height="24"></svg>
              </li>
              <li className="ms-3">
                <svg className="bi" width="24" height="24"></svg>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  );
}
