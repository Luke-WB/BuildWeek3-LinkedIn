import { useEffect, useState } from "react"
import { Row, Col, Card, Button, Container, NavDropdown, CloseButton } from "react-bootstrap"
import { MdGroups } from "react-icons/md"
import { BsPlusLg } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  BsPeopleFill,
  BsChevronCompactUp,
  BsChevronCompactDown,
  BsFillPersonFill,
  BsFillCalendarDateFill,
} from "react-icons/bs"
import { RiContactsBookFill, RiPagesFill, RiNewspaperFill, RiHashtag } from "react-icons/ri"
import { allProfile } from "../redux/actions"
import AddPersonButton from "./AddPersonButton"

const MyNetwork = () => {
  const dispatch = useDispatch()
  const [isTrue, setIsTrue] = useState(false)
  const [peopleFetched, setPeopleFetched] = useState([])
  const [peopleToRender, setPeopleToRender] = useState([])

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/"

  // inizio implementate
  const post = useSelector((state) => state.profile.post)
  const randomNumArr = []
  for (let i = 0; i < 10; i++) {
    randomNumArr[i] = Math.floor(Math.random() * 500)
  }
  useEffect(() => {
    setPeopleToRender(peopleFetched.filter((random) => Math.floor(Math.random() * 2)).slice(0, 12))
  }, [peopleFetched])
  // fine implementate

  // start unfollow arrProfile filter
  let myProfile = useSelector((state) => state.profile.myProfile)
  let arrProfile = useSelector((state) => state.profile.arrProfile)
  let friend = useSelector((state) => state.profile.friend)
  let arProfileCopy = arrProfile?.slice(0)
  let recent = arProfileCopy?.reverse().slice(0, 50)
  let unfollowProfile = recent?.filter((el) => {
    return !friend.includes(el._id)
  })

  let useKey = process.env.REACT_APP_API_KEY
  useEffect(() => {
    dispatch(allProfile(useKey))
  }, [])

  console.log("friend", friend)
  console.log("arrProfile", arrProfile)
  console.log("recent", recent)
  console.log("unfollowProfile", unfollowProfile)

  console.log("people", peopleToRender)
  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} md={3}>
          <Card className="posizione">
            <Card.Body className="pb-0">
              <Card.Text className="proMiddle proGrey">Manage my network</Card.Text>
              <Card.Text>
                <div className="proGrey greyHover d-flex align-items-center">
                  <span className="me-3 proGreyDark">
                    <BsPeopleFill />
                  </span>
                  <span className="proMiddle grandezzeHover ">Connection</span>
                </div>
              </Card.Text>
            </Card.Body>
            <div
              style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
              onClick={() => {
                isTrue ? setIsTrue(false) : setIsTrue(true)
              }}
            >
              <b>
                {isTrue ? (
                  <Card.Body className="pb-2">
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <RiContactsBookFill />
                        </span>
                        Contacts
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <BsFillPersonFill />
                        </span>
                        Following & Followers
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <MdGroups />
                        </span>
                        Groups
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <BsFillCalendarDateFill />
                        </span>
                        Events
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <RiPagesFill />
                        </span>
                        Pages
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <RiNewspaperFill />
                        </span>
                        Newsletters
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div className="proGrey d-flex greyHover grandezzeHover">
                        <span className="me-3 proGreyDark">
                          <RiHashtag />
                        </span>
                        Hashtags
                      </div>
                    </Card.Text>
                    <p className="greyHover ms-2 mb-0 text-secondary d-flex justify-content-start">
                      Show less
                      <span className="ms-2">
                        <BsChevronCompactUp />
                      </span>
                    </p>
                  </Card.Body>
                ) : (
                  <p className="greyHover ms-2 mb-0 text-secondary d-flex justify-content-start">
                    Show more
                    <span className="ms-2">
                      <BsChevronCompactDown />
                    </span>
                  </p>
                )}
              </b>
            </div>
            <hr className="m-0" />
            <Card.Text className="my-2">
              <Link to="/" className="proBlue d-flex justify-content-center">
                Grow your network
              </Link>
            </Card.Text>
            <hr className="m-0" />
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
          </Card>
        </Col>
        <Col xs={12} md={9}>
          {/* versione di antonio */}
          {/* d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4 */}
          <Container>
            <Row>
              <Col xs={12} className="bg-light rounded-3 position-relative proCard  p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="proSmall">Invitations</span>
                  <div className="proIgnore">
                    <span className="proMedium proGreyDark p-2">Manage</span>
                  </div>
                </div>
                <hr className="my-2" style={{ border: "solid 1px #e0dfdc" }} />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className=" rounded-circle"
                      style={{ height: "55px", width: "55px", objectFit: "cover" }}
                      src={post[randomNumArr[0]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <Link to={`/user/${post[randomNumArr[0]].user._id}`} style={{ textDecoration: "none" }}>
                        <div className="proBlack proBold">
                          {post[randomNumArr[0]].user.name} {post[randomNumArr[0]].user.surname}
                        </div>
                      </Link>

                      <div className="proGrey proSmall">{post[randomNumArr[0]].user.title}</div>
                    </div>
                  </div>
                  <div>
                    <Button className="proMore me-3" variant="outline-primary">
                      Ignore
                    </Button>
                    <Button className="proModProfile proMedium" variant="outline-primary">
                      Accept
                    </Button>
                  </div>
                </div>
                <hr className="my-2" style={{ border: "solid 1px #e0dfdc" }} />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className=" rounded-circle"
                      style={{ height: "55px", width: "55px", objectFit: "cover" }}
                      src={post[randomNumArr[1]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <Link to={`/user/${post[randomNumArr[1]].user._id}`} style={{ textDecoration: "none" }}>
                        <div className="proBlack proBold">
                          {post[randomNumArr[1]].user.name} {post[randomNumArr[1]].user.surname}
                        </div>
                      </Link>
                      <div className="proGrey proSmall">{post[randomNumArr[1]].user.title}</div>
                    </div>
                  </div>
                  <div>
                    <Button className="proMore me-3" variant="outline-primary">
                      Ignore
                    </Button>
                    <Button className="proModProfile proMedium" variant="outline-primary">
                      Accept
                    </Button>
                  </div>
                </div>
                <hr className="my-2" style={{ border: "solid 1px #e0dfdc" }} />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className=" rounded-circle"
                      style={{ height: "55px", width: "55px", objectFit: "cover" }}
                      src={post[randomNumArr[2]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <Link to={`/user/${post[randomNumArr[2]].user._id}`} style={{ textDecoration: "none" }}>
                        <div className="proBlack proBold">
                          {post[randomNumArr[2]].user.name} {post[randomNumArr[2]].user.surname}
                        </div>
                      </Link>
                      <div className="proGrey proSmall">{post[randomNumArr[2]].user.title}</div>
                    </div>
                  </div>
                  <div>
                    <Button className="proMore me-3" variant="outline-primary">
                      Ignore
                    </Button>
                    <Button className="proModProfile proMedium" variant="outline-primary">
                      Accept
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="bg-light rounded-3 position-relative proCard my-3 p-2">
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="proSmall">People you may know </span>
                  <div className="proIgnore">
                    <span className="proMedium proGreyDark p-2">See all</span>
                  </div>
                </div>
                <Row>
                  {unfollowProfile?.slice(0, 12).map((el) => {
                    return (
                      <Col xl={4} md={6} sm={12}>
                        <Card className="m-0 p-0 my-2 ombra" style={{ height: "255px" }}>
                          <div
                            className="chiusura rounded-circle"
                            style={{
                              backgroundColor: "black",
                              opacity: "0.60",
                            }}
                          >
                            <CloseButton variant="white" className="p-2" />
                          </div>
                          <Card.Img variant="top" className="imgNetwork m-0 p-0" src={el.image} />
                          <img
                            src={el.image}
                            className="rounded-circle imgDueNetwork mb-0 pb-0"
                            style={{ objectFit: "cover" }}
                            alt="Immagine profilo"
                          />
                          <Card.Body className="m-0 p-0 d-flex flex-column justify-content-between">
                            <div className="ms-3 mb-0">
                              <Link to={`/user/${el._id}`} style={{ textDecoration: "none" }}>
                                <Card.Text className="mt-4 mb-0 proBlack proBold">
                                  {el.name} {el.surname}
                                </Card.Text>
                              </Link>
                              <Card.Text className="m-0 proGrey proVerySmall">{el.title}</Card.Text>
                              <Card.Text className="m-0 proGrey proVerySmall">
                                {el.bio.length < 50 ? `${el.bio}` : `${el.bio.substring(0, 50)}...`}
                              </Card.Text>
                              <Card.Text className="m-0 mt-1 proGrey proVerySmall" style={{ fontSize: "10px" }}>
                                {Math.floor(Math.random() * 3000)} <i>Followers</i>
                              </Card.Text>
                            </div>
                            {/* <Button className="proModProfile mb-3 mx-3" variant="outline-primary">
                              Follower
                            </Button> */}

                            <div className="mx-2 my-2 d-flex justify-content-center">
                              <AddPersonButton personInfo={el} keyuser={el._id} stile={{ width: "300px" }} />
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNetwork
