import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Card, ListGroup } from "react-bootstrap";
import logo from "../assets/LinkedIn_logo_initials.png";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaHome, FaUserFriends, FaBell, FaCompass } from "react-icons/fa";
import { BsBriefcaseFill, BsGrid3X3GapFill, BsPlayBtnFill } from "react-icons/bs";
import { CgInsights } from "react-icons/cg";
import { RiSuitcaseFill, RiAdvertisementLine, RiMessage3Line } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/sass/_navBar.scss";

function OffCanvasExample({ name, ...props }, prop) {

  const userKey =  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs` 


  const myProfile = useSelector((state) => state.profile.profile);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* scoll */
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (listenToScroll) => {
      console.log("scroll");
    });
    let listenToScroll = 0;

    listenToScroll = () => {
      if (windowScroll > heightToShowDiv) {
        isVisible && setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    //window.removeEventListener("scroll", listenToScroll);
    //return () => window.addEventListener("scroll", listenToScroll);
  }, []);

  let heightToShowDiv = 40;
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const [peopleFetched, setPeopleFetched] = useState([]);
  const [word, setWord] = useState("");
  const [nameSearch, setNameSearch] = useState();
  const navigate = useNavigate();

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/";

  useEffect(() => {
    const fetchUser_Profile = async () => {
      try {
        const response = await fetch(profili_utente, {
          headers: {
            Authorization: userKey,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log("arrayPeople", data);
          setPeopleFetched(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser_Profile();
  }, []);

  let newData = [];

  for (let i = 0; i < peopleFetched.length; i++) {
    newData.push({ name: peopleFetched[i].name, id: peopleFetched[i]._id });
  }

  useEffect(() => {
    setNameSearch(newData.find((el) => el.name.toLowerCase().includes(word.toLowerCase())));
    console.log(word);
    console.log("nenene", nameSearch);
  }, [word]);

  const searchName = async () => {
    navigate(`user/${nameSearch.id}`);
  };
  const location = useLocation();
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="sticky-top mb"
        style={{ height: "70px", display: "flex", alignItems: "center" }}>
        <Container className="container d-flex justify-content-between align-items-center">
          <Link to={"/"}>
            <Navbar.Brand href="#home" className="m-0">
              <img
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top me-0"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="bg-white justify-content-end">
            <div className="d-flex align-items-center me-auto mt-4 mt-lg-0 ">
              <FaSearch className="position-relative" style={{ right: "-31px", top: "1px", color: "#4a4a4a" }} />
              <Form className="d-flex " onSubmit={() => searchName()}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="searchFormNav"
                  style={{
                    backgroundColor: "#eef3f8",
                    textIndent: "24px",
                    height: "38px",
                    minWidth: "260px",
                    marginRight: "2px",
                    borderRadius: "4px",
                  }}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Form>
            </div>

            {/* <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>*/}

            <Nav className=" my-2 my-lg-0 align-items-start ms-5 ms-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
              <Link className={`px-2 nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                <Navbar className="icon-word ">
                  <FaHome className="icon" />
                  <span className="d-none d-lg-block ">Home</span>
                </Navbar>
              </Link>
              <Link to={"/mynetwork"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <FaUserFriends className="icon" /> My Network
                </Nav.Link>
              </Link>
              <Link to={"/"} className="link-fix text-secondary px-1">
                <Navbar className="icon-word">
                  <BsBriefcaseFill className="icon" />
                  <span className="d-none d-lg-block"> Jobs</span>
                </Navbar>
              </Link>
              <Link to={"/"} className="link-fix text-secondary px-1">
                <Navbar className="icon-word">
                  <RiMessage3Line className="icon" />
                  <span className="d-none d-lg-block">Messaging</span>
                </Navbar>
              </Link>
              <Link to={"/"} className="link-fix text-secondary px-1">
                <Navbar className="icon-word">
                  <FaBell className="icon" />
                  <span className="d-none d-lg-block">Notifications </span>
                </Navbar>
              </Link>

              {myProfile && <NavDropdown
                title={
                  <div className="icon-word ">
                    <img src={myProfile?.image} className="rounded-circle" alt="pic-user" style={{ width: "29px" }} />
                    <span className="d-none d-lg-block">Me </span>
                  </div>
                }
                id="navbarScrollingDropdown"
                style={{ borderRight: "1px solid lightgray", paddingRight: "15px", paddingTop: "0.5rem" }}
                className="icon-word ">
                <div className="text-center d-flex justify-content-center">
                  <Button variant="green w-100 py-0" id="bottoncino">
                    <Link to={"/user/me"} className="link-fix">
                      View Profile
                    </Link>
                  </Button>
                </div>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  <strong>Account</strong>
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
              </NavDropdown>}

              <NavDropdown
                title={
                  <div className="icon-word" s>
                    <BsGrid3X3GapFill className="icon" />
                    <span className="d-none d-lg-block"> Work </span>
                  </div>
                }
                id="navbarScrollingDropdown"
                className="icon-word "
                style={{ paddingTop: "0.5rem" }}
                onClick={handleShow}
              />
              <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Work</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Card style={{ width: "23rem" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Visit More LinkedIn Products</strong>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-start ms-2 flex-wrap">
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <BsPlayBtnFill />
                          </div>
                          Learning
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <CgInsights />
                          </div>
                          Insights
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <RiSuitcaseFill />
                          </div>
                          Post a job
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <RiAdvertisementLine />
                          </div>
                          Advertise
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <FaCompass />
                          </div>
                          Find Leads
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <MdGroups />
                          </div>
                          Groups
                        </div>
                        <div className="d-flex flex-column align-items-center ms-2 mia">
                          <div className="icone" id="banana">
                            <TiTick />
                          </div>
                          Services Marketplace
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>

                  <Card className="mt-2" style={{ width: "23rem" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>LinkedIn Business Services</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div>
                          <strong>Talent Solutions</strong> <p className="mia">Find, attract and recruit talent</p>
                        </div>
                        <div>
                          <strong>Sales Solutions</strong>
                          <p className="mia"> Unlock sales opportunities</p>
                        </div>
                        <div>
                          <strong>Post a job for free</strong>
                          <p className="mia">Get your job in front of quality candidates</p>
                        </div>
                        <div>
                          <strong>Marketing Solutions</strong>
                          <p className="mia">Acquire customers and grow your business</p>
                        </div>
                        <div>
                          <strong>Learning Solutions</strong>
                          <p className="mia">Develop talent across your organization</p>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div>
                          Create a Company Page
                          <span style={{ fontSize: "22px" }}>
                            <AiOutlinePlus />
                          </span>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
            <Navbar.Text>
              <Link to="/" className="gold  d-flex flex-nowrap link-fix d-none d-lg-block ">
                Try Premium for free
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*DIV CHE COMPARE ALLO SCROLL */}

      <div
        id="scroolDiv"
        className="shadow p-3 mb-5 bg-body rounded border-top d-flex justify-content-between align-items-center d-none d-md-flex">
        <div style={{ height: "60px", display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "7%" }}>
            <img
              className="rounded-circle"
              style={{ width: "50px" }}
              src={"https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"}
              alt="immagine profilo"
            />
          </div>
          <div
            style={{
              width: "400px",
              lineHeight: "17px",
              marginTop: "10px",
              marginLeft: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            {myProfile && <p style={{ marginBottom: "5px" }}>
              <strong>
                {myProfile.name} {myProfile.surname}
              </strong>
            </p>}
            {myProfile && <p style={{ marginBottom: "0px" }}>{myProfile.title}</p>}
          </div>
        </div>
        <div>
          <Form>
            <Button className="proMore me-3" variant="outline-primary">
              Add profile section
            </Button>
            <Button className="proModProfile me-3" variant="outline-primary">
              Add profile section
            </Button>
            <Button className="proOpenTo me-3" variant="primary">
              Open to
            </Button>
          </Form>
        </div>
      </div>
    </>
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
