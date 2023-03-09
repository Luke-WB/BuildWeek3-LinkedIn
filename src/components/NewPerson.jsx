import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchIdProfile } from "../redux/actions"
import { HiUsers } from "react-icons/hi"
import { AiFillEye, AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Experience from "./Experience"
import NewPersonExperience from "./NewPersonExperience"
import People from "./People"
import AddPersonButton from "./AddPersonButton"
import AddPersonButtonProfile from "./AddPersonButtonProfile"
import CollapseComment from "./CollapseComment"
import { BsDot, BsHandThumbsUp } from "react-icons/bs"
import { GiEarthAmerica } from "react-icons/gi"
import Banner from "./Banner"

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
            <Banner />
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
                        className="d-flex flex-column align-items-e bg-light rounded-3 position-relative proCard my-4"
                      >
                        <div className="d-flex flex-row justify-content-between align-items-center me-4">
                          <div>
                            <div className="d-flex flex-row align-items-center">
                            <img
                                  className="my-3 ms-4 me-3 rounded-2"
                                  style={{ height: "55px", width: "55px" }}
                                  src={singPost?.user?.image}
                                  alt="portrait author"
                                />
                              <div className="proBlack my-2">
                                <Link
                                  to={`/user/${singPost?.user?._id}`}
                                  className="link-fix"
                                >
                                  <div className="proBlack proNormal proGreyHBlue link-fix">
                                    {singPost?.user?.name}
                                  </div>
                                </Link>
                                <div className="proGrey proVerySmall">
                                  {Math.floor(Math.random() * 100)} followers
                                </div>
                                <div className="proGrey proVerySmall">
                                  {Math.floor(Math.random() * 12)} <BsDot />{" "}
                                  <GiEarthAmerica />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-2 mx-1">
                          <span className="proGrey proBlack proLight proSmall proNormal">
                            {singPost.text}
                          </span>
                          {singPost.image ? (
                            <img
                              className="mt-3 mb-1 w-100"
                              src={singPost.image}
                              alt="activity"
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="mb-1 mx-3 proGrey proSmall d-flex align-items-center">
                          <BsHandThumbsUp className="likeHover fs-4 me-2" />
                          {Math.floor(Math.random() * 100)}
                        </div>
                        <hr className="my-1 mx-3" />
                        <CollapseComment singlePostId={singPost._id} />
                        
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
