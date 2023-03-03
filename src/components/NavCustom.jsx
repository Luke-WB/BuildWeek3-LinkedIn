import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas, Card, ListGroup } from "react-bootstrap"
import logo from "../assets/LinkedIn_logo_initials.png"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { FaSearch, FaHome, FaUserFriends, FaBell, FaCompass } from "react-icons/fa"
import { BsBriefcaseFill, BsGrid3X3GapFill, BsPlayBtnFill } from "react-icons/bs"
import { CgInsights } from "react-icons/cg"
import { RiSuitcaseFill, RiAdvertisementLine, RiMessage3Line } from "react-icons/ri"
import { MdGroups } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import { AiOutlinePlus } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

function OffCanvasExample({ name, ...props }, prop) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [peopleFetched, setPeopleFetched] = useState([])
  const [word, setWord] = useState("")
  const [nameSearch, setNameSearch] = useState()
  const myProfile = useSelector((state) => state.profile.profile)
  const navigate = useNavigate()

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/"

  useEffect(() => {
    const fetchUser_Profile = async () => {
      try {
        const response = await fetch(profili_utente, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU`,
          },
        })
        if (response.ok) {
          let data = await response.json()
          console.log("arrayPeople", data)
          setPeopleFetched(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser_Profile()
  }, [])

  let newData = []

  for (let i = 0; i < peopleFetched.length; i++) {
    newData.push({ name: peopleFetched[i].name, id: peopleFetched[i]._id })
  }

  useEffect(() => {
    setNameSearch(newData.find((el) => el.name.toLowerCase().includes(word.toLowerCase())))
    console.log(word)
    console.log("nenene", nameSearch)
  }, [word])

  const searchName = async () => {
    navigate(`user/${nameSearch.id}`)
  }

  return (
    <Navbar bg="white" expand="lg">
      <Container className="container d-flex justify-content-between align-items-baseline" style={{ padding: "12px" }}>
        <div className="d-flex ">
          <Navbar.Brand>
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <div className="d-flex">
            <FaSearch className="position-relative" style={{ right: "-183px", top: "15px", color: "#006699" }} />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                searchName()
              }}
            >
              <input
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setWord(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"/"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <FaHome className="icon" />
                  Home
                </Nav.Link>
              </Link>
              <Link to={"/"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <FaUserFriends className="icon" /> My Network
                </Nav.Link>
              </Link>
              <Link to={"/"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <BsBriefcaseFill className="icon" />
                  Jobs
                </Nav.Link>
              </Link>
              <Link to={"/"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <RiMessage3Line className="icon" />
                  Messaging
                </Nav.Link>
              </Link>
              <Link to={"/"} className="link-fix">
                <Nav.Link href="#action1" className="icon-word">
                  <FaBell className="icon" />
                  Notifications
                </Nav.Link>
              </Link>

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
                <Link to={"/user/me"} className="link-fix">
                  <div className="text-center d-flex justify-content-center">
                    <Button variant="green w-100 py-0" id="bottoncino">
                      View Profile
                    </Button>
                  </div>
                </Link>

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
              <Link to="/" className="gold ms-5 d-flex flex-nowrap link-fix">
                Try Premium for free
              </Link>
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
