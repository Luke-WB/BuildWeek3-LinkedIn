import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, reversed } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill, BsCalendarDay, BsHandThumbsUp } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import HomeProfile from "./HomeProfile";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import ModalePost from "./ModalePost";
import ModalPut from "./ModalPut";
import ModalePhoto from "./ModalePhoto";
import { GiEarthAmerica } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import CollapseComment from "./CollapseComment";
<<<<<<< HEAD
import People from "./People";
=======
>>>>>>> parent of 9d76391 (Merge branch 'linkedin' into develop)

const Home = () => {
  const userKey = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`;

  const [showPhoto, setShowPhoto] = useState(false);
  const handleClosePhoto = () => setShowPhoto(false);
  const handleShowPhoto = () => setShowPhoto(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = useSelector((state) => state.profile.token);
  const loading = useSelector((state) => state.profile.loading);
  const post = useSelector((state) => state.profile.post);
  const myProfile = useSelector((state) => state.profile.profile);
  console.log("ooooooooooooooooooooooooooooooooo", loading);

  // profile fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(userKey));
  }, []);

  // post fetch
  const [rendered, setRendered] = useState(false);
  function check() {
    setRendered((prevState) => !prevState);
    console.log(check);
  }
  useEffect(() => {
    dispatch(reversed(userKey));
    console.log(reversed);
  }, [rendered]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Row className="d-flex flex-column flex-md-row">
            <Col xs={12} lg={4}>
              <HomeProfile myProfile={myProfile} />
            </Col>
            <Col xs={12} lg={8}>
              <div className="bg-light rounded-3 position-relative proCard my-4 me-0 p3-0">
                <div className="d-flex align-items-center">
                  <div className="d-inline-block">
                    <Link to={"/user/me"} className="link-fix">
                      <img
                        className="my-3 ms-4 me-3 rounded-circle"
                        style={{ height: "55px" }}
                        src={myProfile?.image}
                        alt="profile"
                      />
                    </Link>
                  </div>
                  <span
                    className="d-inline-block proMore proGrey position-relative postModBar me-3"
                    onClick={handleShow}
                  >
                    <span className="postModText me-3">Start a post</span>
                  </span>

                  <ModalePost
                    handleClose={handleClose}
                    show={show}
                    check={check}
                    // ternaryCheck={false} <--- perchè non funzion :(
                  />
                </div>
                <div className="d-flex justify-content-evenly my-2 mx-4">
                  <div onClick={handleShowPhoto} className="greyHover rounded-2 me-2 px-2 py-3">
                    <MdPhotoSizeSelectActual className="fs-4 text-primary me-2" />
                    Photo
                  </div>
                  <ModalePhoto
                    showPhoto={showPhoto}
                    handleClosePhoto={handleClosePhoto}
                    check={check}

                    // ternaryCheck={false} <--- perchè non funzion :(
                  />

                  <div className="greyHover rounded-2 me-2 px-2 py-3">
                    <BsFillPlayBtnFill className="fs-4 text-success me-2" />
                    Video
                  </div>
                  <div className="greyHover rounded-2 me-2 px-2 py-3">
                    <BsCalendarDay className="fs-4 text-warning me-2" />
                    Event
                  </div>
                  <div className="greyHover rounded-2 me-2 px-2 py-3">
                    <MdArticle className="fs-4 text-danger me-2" />
                    Write article
                  </div>
                </div>
              </div>
              {post &&
                post.slice(0, 10).map((singPost, i) => {
                  console.log("poste", singPost);
                  return (
                    <>
                      <div
                        key={i}
                        className="d-flex flex-column align-items-e bg-light rounded-3 position-relative proCard my-4"
                      >
                        <div className="d-flex flex-row justify-content-between align-items-center me-4">
                          <div>
                            <div className="d-flex flex-row align-items-center">
                              {myProfile?._id === singPost.user._id ? (
                                <img
                                  className="my-3 ms-4 me-3 rounded-2"
                                  style={{ height: "55px", width: "55px" }}
                                  src={myProfile?.image}
                                  alt="portrait author"
                                />
                              ) : (
                                <img
                                  className="my-3 ms-4 me-3 rounded-2"
                                  style={{ height: "55px", width: "55px" }}
                                  src={singPost.user.image}
                                  alt="portrait author"
                                />
                              )}
                              <div className="proBlack my-2">
                                <Link to={`/user/${singPost.user?._id}`} className="link-fix">
                                  <div className="proBlack proNormal proGreyHBlue link-fix">{singPost.user?.name}</div>
                                </Link>
                                <div className="proGrey proVerySmall">{Math.floor(Math.random() * 100)} followers</div>
                                <div className="proGrey proVerySmall">
                                  {Math.floor(Math.random() * 12)} <BsDot /> <GiEarthAmerica />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="proNormal proBlue">
                            <AiOutlinePlus /> Follow
                          </div>
                        </div>
                        <div className="my-2 mx-1">
                          <span className="proGrey proBlack proLight proSmall proNormal">{singPost.text}</span>
                          {singPost.image ? (
                            <img className="mt-3 mb-1 w-100" src={singPost.image} alt="activity" />
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
                        {singPost.user._id === `${myProfile?._id}` ? (
                          <>
                            <div className="proSmall proLight ms-3 mb-1">edited: {singPost.updatedAt.slice(0, 10)}</div>
                            <ModalPut
                              check={check}
                              id={singPost._id}
                              // ternaryCheck={true} <--- perchè non funzion :(
                            />
                            {console.log("eccolo id POST", singPost._id)}
                          </>
                        ) : (
                          <div className="proSmall proLight mx-4 my-2"> edited: {singPost.updatedAt.slice(0, 10)}</div>
                        )}
                      </div>
                    </>
                  );
                })}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
