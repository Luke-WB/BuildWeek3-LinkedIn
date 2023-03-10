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
          <Card.Body className="d-flex flex-column align-items-center">
            <div>
              <img
                className="me-2 mb-2"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d90aeebc-e2bd-4323-9b81-e47c1984a5be/dbicdwx-3a0552e9-6608-4879-8106-4057073320a3.png/v1/fill/w_894,h_894,q_70,strp/woolmark_logo_inkscape_tutorial_by_iconocracia_dbicdwx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q5MGFlZWJjLWUyYmQtNDMyMy05YjgxLWU0N2MxOTg0YTViZVwvZGJpY2R3eC0zYTA1NTJlOS02NjA4LTQ4NzktODEwNi00MDU3MDczMzIwYTMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3TjHf8t0RMpD1-Lt8rI-MQwQrVz4Gf0mYnt9jwdYRg4"
                alt="Logo aziende"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              quibusdam rerum inventore nam. Ex consequuntur nobis reiciendis
              necessitatibus quae modi, architecto eos perferendis, a rerum
              libero quam quisquam incidunt nulla?
            </p>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <img
              className="me-2 mb-2"
              src="https://www.zarla.com/assets/images/logo-1-xl-it-20220110.png"
              alt="Logo aziende"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ea delectus, similique ad iste dicta autem maiores
              earum, iure possimus quasi. Atque veniam maiores temporibus
              ducimus necessitatibus maxime esse nam?
            </p>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <img
              className="me-2 mb-2"
              src="https://michelemariatammaro.it/wp-content/uploads/2019/07/Logo-MMT.jpg"
              alt="Logo aziende"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              tenetur doloremque? Molestias deserunt expedita nemo possimus
              libero asperiores commodi. Reiciendis officia aliquid veniam
              natus, quo error in!
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={3}>
        <Card.Text className="mt-2">
          <div className="d-flex flex-wrap align-items-center justify-content-center m-3 linkini">
            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              About
            </span>
            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              Accessibility
            </span>
            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
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

            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              Ad Choises
            </span>
            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
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
                <span style={{ fontSize: "11px" }}>
                  Find, attract and recruit talent
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Sales Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>
                  Unlock sales opportunities
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Post a job for free
                </strong>
                <span style={{ fontSize: "11px" }}>
                  Get your job in front of quality candidates
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Marketing Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>
                  Acquire customers and grow your business
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <strong style={{ fontSize: "15px" }} className="d-block">
                  Learnig Solutions
                </strong>
                <span style={{ fontSize: "11px" }}>
                  Develop talent across your organization
                </span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <strong
                  style={{ fontSize: "15px" }}
                  className="d-block text-center"
                >
                  Create a Company Page
                  <span title="Press to Create" className="ms-3">
                    <BsPlusLg />
                  </span>
                </strong>
              </NavDropdown.Item>
            </NavDropdown>

            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
              Get the Linkedin App
            </span>
            <span
              className="mx-2 fontMini proGrey proGreyHBlue"
              style={{ cursor: "pointer" }}
            >
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
