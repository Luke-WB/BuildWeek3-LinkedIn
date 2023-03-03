import { useEffect, useState } from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import {
  BsPeopleFill,
  BsChevronCompactUp,
  BsChevronCompactDown,
  BsFillPersonFill,
  BsFillCalendarDateFill,
} from "react-icons/bs"
import { RiContactsBookFill, RiPagesFill, RiNewspaperFill, RiHashtag } from "react-icons/ri"
import { MdGroups } from "react-icons/md"
import logo from "../assets/Linkedin-Logo-2003.png"

const MyNetwork = () => {
  const [isTrue, setIsTrue] = useState(false)
  const [peopleFetched, setPeopleFetched] = useState([])
  const [peopleToRender, setPeopleToRender] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setPeopleToRender(peopleFetched.slice(0, 10))
  }, [peopleFetched])

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
          setPeopleFetched(data.reverse())
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser_Profile()
  }, [])

  console.log("people", peopleToRender)
  return (
    <Row className="mt-4">
      <Col xs={12} md={4}>
        <Card>
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
            <a href="#" className="proBlue d-flex justify-content-center">
              Grow your network
            </a>
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
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
                Privacy & Terms
              </span>
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
                Ad Choises
              </span>
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
                Advertising
              </span>
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
                Business Services
              </span>
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
                Get the Linkedin App
              </span>
              <span className="mx-2 fontMini proGrey proGreyHBlue" style={{ cursor: "pointer" }}>
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
        {peopleToRender.map((el) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.bio}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  )
}

export default MyNetwork
