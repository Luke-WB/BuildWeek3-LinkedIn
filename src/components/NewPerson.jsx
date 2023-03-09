import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchIdProfile } from "../redux/actions"
import { HiUsers } from "react-icons/hi"
import { AiFillEye } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Experience from "./Experience"
import NewPersonExperience from "./NewPersonExperience"
import People from "./People"
import AddPersonButton from "./AddPersonButton"
import AddPersonButtonProfile from "./AddPersonButtonProfile"

export default function NewPerson() {
  const params = useParams()
  const selProfile = useSelector((state) => state.selectedProfile.content)
  const post = useSelector((state) => state.profile.post)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIdProfile(params.userID))
  }, [params])

  return (
    <Container>
      <Row className="d-flex flex-column flex-md-row">
          <Col xs={12} lg={9}>
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="proImgBarSetting">
          <Link>
            <img
              className="proImgBarSetting"
              style={{ objectFit: "cover", objectPosition: "top" }}
              src={"https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"}
              alt="immagine background"
            />
          </Link>
        </div>
        <Link className="link-fix">
          <img className="rounded-circle position-absolute proAbsolute" src={selProfile.image} alt="immagine profilo" />
        </Link>
        <div className="mt-5 mx-4">
          <h2 className="mt-2 mb-0">
            {selProfile.name} {selProfile.surname}
          </h2>
          <div className="proBlack proMedium proLight">{selProfile.title}</div>
          <Link className="link-fix">
            <div className="proGrey proLight proGreyHBlue mt-2">{selProfile.email}</div>
          </Link>
          <div className="mt-2">
            <Link className="link-fix">
              <span className="proGrey proLight proGreyHBlue">{selProfile.area}</span>
            </Link>
            <Link className="link-fix">
              <span className="proBlue">Contact info</span>
            </Link>
          </div>
          <Link className="link-fix">
            <div className="proBlue mt-2 mb-3">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
          <AddPersonButtonProfile personInfo={params.userID}/>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">About</h2>
          <div className="proBlack prosmall proLight mt-2">{selProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Experience</h2>
          <Link className="link-fix">
            <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
          <div className="proBlack prosmall proLight mt-2">{selProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Activity</h2>
          <Link className="link-fix">
            <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
          <div className="proBlack prosmall proLight mt-2">
            {post &&
              post
                /* .filter((postUnfilt) => postUnfilt.text.length > 10) */
                .slice(0, 50)
                .map((singPost, i) => {
                  return (
                    <>
                      {singPost.user._id === `${params.userID}` ? (
                        <>
                          <div
                            key={i}
                            className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
                          >
                            <div className="my-2">
                              <h3 className="proBlack my-2 mx-4">
                                writted by{" "}
                                <Link to={`/user/${singPost.user?._id}`} className="link-fix">
                                  <span className="proBlack proGreyHBlue">{singPost.user?.name}</span>
                                </Link>
                              </h3>
                              <div className="my-2 me-5 mx-4">
                                <span className="proGrey proBlack proLight proSmall proNormal">{singPost.text}</span>
                              </div>
                              {singPost.image?  <img className="my-3 ms-4 me-3 rounded-2 w-100" src={singPost.image} alt="postedImg" /> : <></>}
                            </div>
                            <div className="proSmall proLight mx-4">edited: {singPost.updatedAt.slice(0, 10)}</div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                })}
          </div>
        </div>
      </div>

      {/* <div>Experience</div> <-------- da fare domani */}
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Interest</h2>
          <div className="proBlack prosmall proLight mt-2">{selProfile.bio}</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <NewPersonExperience myProfile={selProfile} />
        </div>
      </div>
      </Col>
          <Col xs={12} lg={3}>
            <People />
          </Col>
        </Row>
    </Container>
  )
}
