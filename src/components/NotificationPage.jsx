import { Col, NavDropdown, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function NotificationsPage() {
  return (
    <Row>
      <Col xs={12} md={2}>
        <Card className="d-flex flex-column justify-content-center ">
          <Card.Body className="pb-0">Manage your Notifications</Card.Body>
          <Card.Body>
            <Link to="/">View Settings</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={7}>
        <Card>
          <Card.Body className="d-flex align-items-center">
            <img
              className="me-2"
              src="https://uploads.turbologo.com/uploads/design/hq_preview_image/400982/draw_svg20210814-32701-1gcghjs.svg.png"
              alt="Logo aziende"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quibusdam rerum inventore nam. Ex
              consequuntur nobis reiciendis necessitatibus quae modi, architecto eos perferendis, a rerum libero quam
              quisquam incidunt nulla?
            </p>
          </Card.Body>
          <Card.Body className="d-flex aling-items-center">
            <img
              className="me-2"
              src="https://s.tmimgcdn.com/scr/1200x750/195100/modello-di-logo-quadrato-di-sviluppo_195120-original.jpg"
              alt="Logo aziende"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea delectus, similique ad iste dicta
              autem maiores earum, iure possimus quasi. Atque veniam maiores temporibus ducimus necessitatibus maxime
              esse nam?
            </p>
          </Card.Body>
          <Card.Body className="d-flex aling-items-center">
            <img
              className="me-2"
              src="https://s.tmimgcdn.com/scr/1200x750/68400/evolcom-moving-e-letter-logo-template_68473-original.jpg"
              alt="Logo aziende"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tenetur doloremque? Molestias deserunt
              expedita nemo possimus libero asperiores commodi. Reiciendis officia aliquid veniam natus, quo error in!
              Debitis, tempore cum?
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={3}>
        <Card.Text className="mt-2">
          <div className="d-flex flex-wrap align-items-center justify-content-center m-3 linkini">
            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              About
            </span>
            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              Accessibility
            </span>
            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              Help Center
            </span>
            <NavDropdown
              title=" Privacy & Terms"
              id="basic-nav-dropdown"
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              <NavDropdown.Item href="#action/3.4">
                <small style={{ color: "#5e5e5e" }}>Privacy Policy</small>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <small style={{ color: "#5e5e5e" }}>User Agreement</small>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <small style={{ color: "#5e5e5e" }}>Cookie Policy</small>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <small style={{ color: "#5e5e5e" }}>Copyright Policy</small>
              </NavDropdown.Item>
            </NavDropdown>

            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              Ad Choises
            </span>
            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              Advertising
            </span>
            <NavDropdown
              title="Business Services"
              id="basic-nav-dropdown"
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Talent Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>Find, attract and recruit talent</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Sales Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>Unlock sales opportunities</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Post a job for free
                </strong>
                <span style={{ fontSize: "11px" }}>Get your job in front of quality candidates</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Marketing Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>Acquire customers and grow your business</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Learnig Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>Develop talent across your organization</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block text-center">
                  Create a Company Page
                  <span title="Press to Create" className="ms-3">
                    <BsPlusLg />
                  </span>
                </strong>
              </NavDropdown.Item>
            </NavDropdown>

            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              Get the Linkedin App
            </span>
            <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
              More
            </span>
            <div className="mt-2" style={{ fontSize: "12px" }}>
              <div className="d-flex justify-content-center align-items-center ">
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
                  alt="pic-logo"
                  style={{ width: "23%" }}
                />
                <span>Linkedin Corporation ©</span>
                <span className="d-flex justify-content-center">
                  <i>2023</i>
                </span>
              </div>
            </div>
          </div>
        </Card.Text>
      </Col>
    </Row>
  );
}

export default NotificationsPage;
