import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, reversed } from "../redux/actions";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill, BsCalendarDay } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import HomeProfile from "./HomeProfile";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ModalePost from "./ModalePost";
import ModalPut from "./ModalPut";
import ModalePhoto from "./ModalePhoto";

const Home = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const handleClosePhoto = () => setShowPhoto(false);
  const handleShowPhoto = () => setShowPhoto(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPost = {
    text: "",
  };

  const [newPost, setPost] = useState([]);
  // profile fetch
  const token = useSelector((state) => state.profile.token);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  // post fetch

  const [rendered, setRendered] = useState(false);

  function check() {
    setRendered((prevState) => !prevState);
    console.log(check);
  }

  const post = useSelector((state) => state.profile.post);
  useEffect(() => {
    dispatch(reversed(token));
    console.log(reversed);
  }, [rendered]);

  /*  async function postPost() {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const res = await fetch(urlToFetch, {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objPost),
      });
      if (res.ok) {
        const addPost = await res.json();
        console.log("testPOST", addPost);
        setPost(addPost);
      } else {
        console.log("error");
      }
    } catch (error) {
      alert(error);
    }
  }
 */

  const myProfile = useSelector((state) => state.profile.profile);

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
                    <Link to={"/profile"}>
                      <img
                        className="my-3 ms-4 me-3 rounded-circle"
                        style={{ height: "55px" }}
                        src={myProfile.image}
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
                  <div
                    onClick={handleShowPhoto}
                    className="greyHover rounded-2 me-2 px-2 py-3"
                  >
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
                post
                  /* .filter((postUnfilt) => postUnfilt.text.length > 10) */
                  .slice(0, 50)
                  .map((singPost, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
                        >
                          <div className="my-2 mx-4">
                            <div className="d-flex flex-row align-items-center">
                              {myProfile._id === singPost.user._id ? (
                                <img
                                  className="my-3 ms-4 me-3 rounded-2"
                                  style={{ height: "55px", width: "55px" }}
                                  src={myProfile.image}
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
                              <h3 className="proBlack my-2">
                                writted by{" "}
                                <Link to={`/user/${singPost.user?._id}`}>
                                  <span className="proBlack proGreyHBlue">
                                    {singPost.user?.name}
                                  </span>
                                </Link>
                              </h3>
                            </div>
                            <div className="my-2 me-5 mx-4">
                              <span className="proGrey proBlack proLight proSmall proNormal">
                                {singPost.text}
                              </span>
                              <img
                                className="my-3 w-100"
                                src={singPost.image}
                                alt="activity photo"
                              />
                            </div>
                          {singPost.user._id === `63fc6fa3f193e60013807f59` ? (
                            <>
                              <div className="proSmall proLight ms-3 mb-1">
                                edited: {singPost.updatedAt.slice(0, 10)}
                              </div>
                              <ModalPut
                                check={check}
                                id={singPost._id}
                                // ternaryCheck={true} <--- perchè non funzion :(
                                  />
                              {console.log("eccolo id POST", singPost._id)}
                            </>
                          ) : (
                            <div className="proSmall proLight mx-4 my-2">
                              edited: {singPost.updatedAt.slice(0, 10)}
                            </div>
                          )}
                          </div>
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
