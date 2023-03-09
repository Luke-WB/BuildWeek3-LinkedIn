import { Col, Row, NavDropdown, Button, Container } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { BsFillBookmarkFill, BsBellFill, BsFillPlayBtnFill, BsPlusLg } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
import { FaArrowRight, FaUserAlt } from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import { SiPagekit } from "react-icons/si"
import { IoSettingsSharp } from "react-icons/io5"
import { TfiWrite } from "react-icons/tfi"
import SearchJob from "./SearchJob"
import logo from "../assets/omino.png"
import logoDue from "../assets/paginasquare.gif"

function JobPage() {
  return (
    <Row>
      <Col xs={12} md={9}>
        <Row>
          <Col xs={12} md={4}>
            <Container>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <BsFillBookmarkFill />
                    <span className="proGreyDark ms-2">My jobs</span>
                  </Card.Text>
                  <Card.Text>
                    <BsBellFill />
                    <span className="proGreyDark ms-2">Job alerts</span>
                  </Card.Text>
                  <Card.Text>
                    <TiTick />
                    <span className="proGreyDark ms-2">Demonstrate skills</span>
                  </Card.Text>
                  <Card.Text>
                    <RiPagesLine />
                    <span className="proGreyDark ms-2">Interview prep</span>
                  </Card.Text>
                  <Card.Text>
                    <SiPagekit />
                    <span className="proGreyDark ms-2">Resume builder</span>
                  </Card.Text>
                  <Card.Text>
                    <BsFillPlayBtnFill />
                    <span className="proGreyDark ms-2 ">Job seeker guidance</span>
                  </Card.Text>
                  <Card.Text>
                    <IoSettingsSharp />
                    <span className="proGreyDark ms-2">Application setting</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="proModProfile w-100 mt-3 " variant="outline-primary">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3">
                    <TfiWrite />
                  </span>
                  Post a free job
                </div>
              </Button>
            </Container>
          </Col>
          <Col xs={12} md={8}>
            <SearchJob />
          </Col>
        </Row>
      </Col>
      {/* PRIMA CARD */}
      <Col xs={12} md={3}>
        <Card>
          <Card.Body>
            <Card.Text>
              <strong className="proGreyDark d-block">Open to work</strong>
              <small className="proGrey" style={{ fontSize: "90%" }}>
                Recommended based on your activity
              </small>
            </Card.Text>
            <Card.Text>
              <dv>
                <div style={{ background: "rgb(249, 249, 249)" }}>
                  <div className="d-flex align-items-center">
                    <span className="">Show recruiters you’re open to new job opportunities</span>
                    <img src={logo} class="rounded-circle omino" alt="..."></img>
                    <span className="ominoIcona">
                      <FaUserAlt />
                    </span>
                  </div>
                </div>
                <p className="mt-3">
                  Get more InMails from recruiters when you are #OpenToWork - you control who sees this
                </p>
                <strong className="proGrey proGreyHBlue">
                  <p style={{ cursor: "pointer" }}>
                    Get started <FaArrowRight />
                  </p>
                </strong>
              </dv>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* SECONDA CARD */}
        <Card className="mt-4">
          <Card.Body>
            <Card.Text>
              <strong className="proGreyDark d-block">Job seeker guidance</strong>
              <small className="proGrey" style={{ fontSize: "90%" }}>
                Recommended based on your activity
              </small>
            </Card.Text>
            <Card.Text>
              <dv>
                <div style={{ background: "rgb(249, 249, 249)" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="ms-2">I want to improve my resume</span>
                    <img src={logoDue} style={{ width: "28%" }} alt="..."></img>
                  </div>
                </div>
                <p className="mt-3">
                  Explore our curated guide of expert-led courses, such as how to improve your resume and grow your
                  network, to help you land your next opportunity.
                </p>
                <strong className="proGrey proGreyHBlue">
                  <p style={{ cursor: "pointer" }}>
                    Show more <FaArrowRight />
                  </p>
                </strong>
              </dv>
            </Card.Text>
          </Card.Body>
        </Card>
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
  )
}

export default JobPage
