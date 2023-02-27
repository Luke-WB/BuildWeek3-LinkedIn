import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import logo from "../assets/LinkedIn_logo_initials.png";
import { FaSearch, FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { BsBriefcaseFill, BsGrid3X3GapFill } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
import React, { useState } from "react";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="white" expand="lg">
      <Container className="container d-flex justofy-content-between">
        <div className="d-flex ">
          <Navbar.Brand href="#home">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <FaSearch />
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
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

              <NavDropdown title="Me" id="navbarScrollingDropdown" className="icon-word">
                <Button>View Profile</Button>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Try Premium for free</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Settings & Privacy</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Help</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Language</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Manage</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Posts & Activity</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Job Posting Account</NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Sign Out</NavDropdown.Item>
              </NavDropdown>
              <BsGrid3X3GapFill />
              <NavDropdown
                title="Work"
                id="navbarScrollingDropdown"
                style={{ borderLeft: "1px solid lightgray" }}
                className="icon-word"
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
                    <h6>LinkedIn Business Services</h6>
                    <p>Talent Solutions Find, attract and recruit talent</p>
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
              <a href="#login" className="gold">
                Try Premium for free
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
