import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome, fetchProfile } from "../redux/actions";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill, BsCalendarDay } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import HomeProfile from "./HomeProfile";
import { Link } from "react-router-dom";

const Home = () => {
  // profile fetch
  const token = useSelector((state) => state.profile.token);
  const myProfile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(token));
  }, []);

  // post fetch
  const post = useSelector((state) => state.profile.post);
  useEffect(() => {
    dispatch(fetchHome(token));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <HomeProfile/>
          </Col>
          <Col xs={8}>
            <div className="bg-light rounded-3 position-relative proCard my-4 me-0 p3-0">
              <div className="d-flex align-items-center">
                <div className="d-inline-block">
                <Link to={"/profile"}><img
                    className="my-3 ms-4 me-3 rounded-circle"
                    style={{ height: "55px" }}
                    src="https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"
                    alt="profile"
                  /></Link>
                </div>
                <span className="d-inline-block proMore proGrey position-relative postModBar me-3">
                  <span className="postModText me-3">Start a post</span>
                </span>
              </div>
              <div className="d-flex justify-content-evenly my-2 mx-4">
                <div className="greyHover rounded-2 me-2 px-2 py-3">
                  <MdPhotoSizeSelectActual className="fs-4 text-primary me-2" />{" "}
                  Photo
                </div>
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

            {post && post
              .filter(
                (postUnfilt, h) => h > 2800 && postUnfilt.text.length > 10
              )
              .slice(0, 10)
              .map((singPost, i) => {
                return (
                  <>
                    <div
                      key={i + "post"}
                      className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
                    >
                      <div className="my-2 mx-4">
                        <h3 className="proBlack my-2">
                          writted by{" "}
                          <a href="#">
                            <span className="proBlack proGreyHBlue">
                              {singPost.user?.name}
                            </span>
                          </a>
                        </h3>
                        <div className="my-2 me-5">
                          <span className="proGrey proBlack proLight proSmall proNormal">
                            {singPost.text}
                          </span>
                        </div>
                        <div className="proSmall proLight">
                          edited: {singPost.updatedAt.slice(0, 10)}
                        </div>
                        <Button
                          className="proModProfile me-3 my-3"
                          variant="outline-primary"
                        >
                          Add
                        </Button>
                        <Button className="proDelete" variant="danger">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
