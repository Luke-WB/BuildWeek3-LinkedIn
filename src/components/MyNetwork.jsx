import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { MdGroups } from "react-icons/md";
import logo from "../assets/Linkedin-Logo-2003.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BsPeopleFill,
  BsChevronCompactUp,
  BsChevronCompactDown,
  BsFillPersonFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import {
  RiContactsBookFill,
  RiPagesFill,
  RiNewspaperFill,
  RiHashtag,
} from "react-icons/ri";

const MyNetwork = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [peopleFetched, setPeopleFetched] = useState([]);
  const [peopleToRender, setPeopleToRender] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {        <==== SE VUOI RIMETTERE ATTIVA QUESTO USEEFFECT E DISATTIVA IL MIO CODICE RIGA 33-40
    //   setPeopleToRender(peopleFetched.slice(0, 9));  
  // }, [peopleFetched]);

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/";

  // inizio implementate da antonio
  const post = useSelector((state) => state.profile.post);
  const randomNumArr = [];
  for (let i = 0; i < 10; i++) {
    randomNumArr[i] = Math.floor(Math.random() * 500);
  }
  useEffect(() => {
    setPeopleToRender(peopleFetched.filter((random) => Math.floor(Math.random()*2)).slice(0, 9));
  }, [peopleFetched]);
  // fine implementate da antonio

  useEffect(() => {
    const fetchUser_Profile = async () => {
      try {
        const response = await fetch(profili_utente, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log("arrayPeople", data);
          setPeopleFetched(data.reverse());
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser_Profile();
  }, []);

  console.log("people", peopleToRender);
  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} md={4}>
          <Card>
            <Card.Body className="pb-0">
              <Card.Text className="proMiddle proGrey">
                Manage my network
              </Card.Text>
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
                isTrue ? setIsTrue(false) : setIsTrue(true);
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
                    Show more{" "}
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
                <span
                  className="mx-2 fontMini proGrey proGreyHBlue"
                  style={{ cursor: "pointer" }}
                >
                  Privacy & Terms
                </span>
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
                <span
                  className="mx-2 fontMini proGrey proGreyHBlue"
                  style={{ cursor: "pointer" }}
                >
                  Business Services
                </span>
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
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={logo} alt="pic-logo" style={{ width: "23%" }} />
                    <span>Linkedin Corporation ©</span>
                  </div>
                  <span className="d-flex justify-content-center">
                    <i>2023</i>
                  </span>
                </div>
              </div>
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          {/* versione di antonio */}
          {/* d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4 */}
          <Container>
            <Row>
              <Col
                xs={12}
                className="bg-light rounded-3 position-relative proCard my-3"
              >
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
                      style={{ height: "55px", width: "55px" }}
                      src={post[randomNumArr[0]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <div className="proBlack proBold">
                        {post[randomNumArr[0]].user.name}{" "}
                        {post[randomNumArr[0]].user.surname}
                      </div>
                      <div className="proGrey proSmall">
                        {post[randomNumArr[0]].user.title}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="proMedium proIgnore me-3"
                      variant="outline-primary"
                    >
                      Ignore
                    </Button>
                    <Button
                      className="proModProfile proMedium"
                      variant="outline-primary"
                    >
                      Accept
                    </Button>
                  </div>
                </div>
                <hr className="my-2" style={{ border: "solid 1px #e0dfdc" }} />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className=" rounded-circle"
                      style={{ height: "55px", width: "55px" }}
                      src={post[randomNumArr[1]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <div className="proBlack proBold">
                        {post[randomNumArr[1]].user.name}{" "}
                        {post[randomNumArr[1]].user.surname}
                      </div>
                      <div className="proGrey proSmall">
                        {post[randomNumArr[0]].user.title}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="proMedium proIgnore me-3"
                      variant="outline-primary"
                    >
                      Ignore
                    </Button>
                    <Button
                      className="proModProfile proMedium"
                      variant="outline-primary"
                    >
                      Accept
                    </Button>
                  </div>
                </div>
                <hr className="my-2" style={{ border: "solid 1px #e0dfdc" }} />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className=" rounded-circle"
                      style={{ height: "55px", width: "55px" }}
                      src={post[randomNumArr[2]].user.image}
                      alt="person you may know"
                    />
                    <div className="ms-3">
                      <div className="proBlack proBold">
                        {post[randomNumArr[2]].user.name}{" "}
                        {post[randomNumArr[2]].user.surname}
                      </div>
                      <div className="proGrey proSmall">
                        {post[randomNumArr[0]].user.title}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="proMedium proIgnore me-3"
                      variant="outline-primary"
                    >
                      Ignore
                    </Button>
                    <Button
                      className="proModProfile proMedium"
                      variant="outline-primary"
                    >
                      Accept
                    </Button>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                className="bg-light rounded-3 position-relative proCard my-3"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span className="proSmall">
                    People you may know from Epicode FullStack Web Developer
                  </span>
                  <div className="proIgnore">
                    <span className="proMedium proGreyDark p-2">See all</span>
                  </div>
                </div>
                <Row>
                  {peopleToRender.map((el) => {
                    return (
                      <Col xs={4}>
                        <Card
                          className="m-0 p-0 my-2"
                          style={{ minHeight: "350px" }}
                        >
                          <Card.Img
                            variant="top"
                            className="imgNetwork m-0 p-0"
                            src={el.image}
                          />
                          <img
                            src={el.image}
                            className="rounded-circle imgDueNetwork mb-0 pb-0"
                            alt="..."
                          />
                          <Card.Body className="m-0 p-0 d-flex flex-column justify-content-between">
                            <div className="ms-3 mb-0">
                              <Card.Text className="m-0 proBlack proBold">
                                {el.name} {el.surname}
                              </Card.Text>
                              <Card.Text className="m-0 proGrey proVerySmall">
                                {el.title}
                              </Card.Text>
                              <Card.Text className="m-0 proGrey proVerySmall">
                                {el.bio.length < 50
                ? `${el.bio}`
                : `${el.bio.substring(0, 50)}...`}
                              </Card.Text>
                              <Card.Text
                                className="m-0 proGrey proVerySmall"
                                style={{ fontSize: "10px" }}
                              >
                                {Math.floor(Math.random() * 3000)} Followers
                              </Card.Text>
                            </div>
                            <Button
                              className="proModProfile mb-3 mx-3"
                              variant="outline-primary"
                            >
                              Follower
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>

          {/* versione di benny */}
          {/* <Row>
          <Col>
            <div>
              <Card>
                <Card.Text className="d-flex justify-content-between px-2 align-items-center my-3 ">
                  <span>No pending invitations</span>
                  <div className="greyHover2" style={{ borderRadius: "6px" }}>
                    <span className="proMiddle proGrey p-2">Manage</span>
                  </div>
                </Card.Text>
              </Card>
            </div>
            <div className="container  " style={{ background: "white" }}>
              {peopleToRender.map((el) => (
                <Row>
                  <Col xs={12} md={4}>
                    <Card className="my-3" style={{ width: "270px" }}>
                      <Card.Img
                        variant="top"
                        className="imgNetwork"
                        src={el.image}
                      />
                      <img
                        src={el.image}
                        className="rounded-circle imgDueNetwork"
                        alt="..."
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Text className="m-0 ">
                          <strong>
                            {el.name} {el.surname}
                          </strong>
                        </Card.Text>
                        <Card.Text className="m-0 proGrey">
                          {el.title}
                        </Card.Text>
                        <Card.Text className="m-0 proGrey">{el.bio}</Card.Text>
                        <Card.Text
                          className="proGrey"
                          style={{ fontSize: "small" }}
                        >
                          {Math.floor(Math.random() * 3000)} Followers
                        </Card.Text>
                        <Button className="proModProfile">Follower</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row> */}
        </Col>
      </Row>
    </Container>
  );
};

export default MyNetwork;
