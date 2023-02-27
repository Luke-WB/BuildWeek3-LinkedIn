import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Card, ListGroup } from "react-bootstrap"
import logo from "../assets/LinkedIn_logo_initials.png"
import { FaSearch, FaHome, FaUserFriends, FaBell } from "react-icons/fa"
import { BsBriefcaseFill, BsGrid3X3GapFill, BsPlayBtnFill } from "react-icons/bs"
import { RiMessage3Line } from "react-icons/ri"
import React, { useState } from "react"
import { useSelector } from "react-redux"

function OffCanvasExample({ name, ...props }, prop) {
  const myProfile = useSelector((state) => state.profile.profile)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Navbar bg="white" expand="lg">
      <Container className="container d-flex justify-content-between align-items-baseline" style={{ padding: "12px" }}>
        <div className="d-flex ">
          <Navbar.Brand href="#home">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <div className="d-flex">
            <FaSearch className="position-relative" style={{ right: "-183px", top: "15px", color: "#006699" }} />
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
          </div>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" className="icon-word">
                <FaHome className="icon" />
                Home
              </Nav.Link>
              <Nav.Link href="#action1" className="icon-word">
                <FaUserFriends className="icon" /> My Network
              </Nav.Link>
              <Nav.Link href="#action1" className="icon-word">
                <BsBriefcaseFill className="icon" />
                Jobs
              </Nav.Link>
              <Nav.Link href="#action1" className="icon-word">
                <RiMessage3Line className="icon" />
                Messaging
              </Nav.Link>
              <Nav.Link href="#action1" className="icon-word">
                <FaBell className="icon" />
                Notifications
              </Nav.Link>

              <NavDropdown
                title={
                  <div className="icon-word ">
                    <img src={myProfile.image} className="rounded-circle" alt="pic-user" style={{ width: "35px" }} />
                    Me
                  </div>
                }
                id="navbarScrollingDropdown"
                className="icon-word"
              >
                <div className="text-center d-flex justify-content-center">
                  <Button variant="green w-100 py-0" id="bottoncino">
                    View Profile
                  </Button>
                </div>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  <strong>Account</strong>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Try Premium for free</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Settings & Privacy</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Help</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Language</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <strong>Manage</strong>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Posts & Activity</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Job Posting Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"> Sign Out</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <div className="icon-word">
                    <BsGrid3X3GapFill className="icon" />
                    Work
                  </div>
                }
                id="navbarScrollingDropdown"
                style={{ borderLeft: "1px solid lightgray" }}
                className="icon-word "
                onClick={handleShow}
              />
              <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Work</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    <h6>Visit More LinkedIn Products</h6>
                    <p>Learning Insights Post a job Advertise Find Leads Groups Services Marketplace </p>
                  </div>
                  <div>
                    <Card style={{ width: "18rem" }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <h6>LinkedIn Business Services</h6>
                    <p>
                      <BsPlayBtnFill />
                      Talent Solutions Find, attract and recruit talent
                    </p>
                    <p>Sales Solutions Unlock sales opportunities</p>
                    <p> Post a job for free Get your job in front of quality candidates</p>
                    <p> Marketing Solutions Acquire customers and grow your business</p>
                    <p>Learning Solutions Develop talent across your organization</p>
                  </div>
                  <div>Create a Company Page</div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
            <Navbar.Text>
              <a href="#login" className="gold ms-5 d-flex flex-nowrap">
                Try Premium for free
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  )
}

export default Example
