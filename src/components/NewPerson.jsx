import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchIdProfile } from "../redux/actions";
import { HiUsers } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import ModalePut from "./ModalPut";

export default function NewPerson() {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const selProfile = useSelector((state) => state.selectedProfile.content);
  useEffect(() => {
    dispatch(fetchIdProfile(params.userID));
  }, [params]);
  const post = useSelector((state) => state.profile.post);
  console.log("prova", selProfile);

  // function check() {
  //     setFetched((prevState) => !prevState);
  //   }

  console.log(params.userID);
  return (
    <>
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="proImgBarSetting">
          <Link to="/">
            <img
              className="proImgBarSetting"
              style={{ objectFit: "cover", objectPosition: "top" }}
              src={"https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"}
              alt="immagine background"
            />
          </Link>
        </div>
        <Link to="/">
          <img className="rounded-circle position-absolute proAbsolute" src={selProfile.image} alt="immagine profilo" />
        </Link>
        <div className="mt-5 mx-4">
          <h2 className="mt-2 mb-0">
            {selProfile.name} {selProfile.surname}
          </h2>
          <div className="proBlack proMedium proLight">{selProfile.title}</div>
          <Link to="/">
            <div className="proGrey proLight proGreyHBlue mt-2">{selProfile.email}</div>
          </Link>
          <div className="mt-2">
            <Link to="/">
              <span className="proGrey proLight proGreyHBlue">{selProfile.area}</span>
            </Link>{" "}
            -{" "}
            <Link to="/">
              <span className="proBlue">Contact info</span>
            </Link>
          </div>
          <Link to="/">
            <div className="proBlue mt-2 mb-3">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
          <Form className="mb-4">
            <Button className="proOpenTo me-3" variant="primary">
              Open to
            </Button>
            <Button className="proModProfile me-3" variant="outline-primary">
              Add profile section
            </Button>
            <Button className="proMore me-3" variant="outline-primary">
              Add profile section
            </Button>
          </Form>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-2 mx-4">
          <h2 className="mt-2 mb-0">Analitics</h2>
          <div className="proGrey proLight proSmall my-0">
            <AiFillEye className="proIcon me-2" />
            private to you
          </div>
          <div className="d-flex my-3">
            <div className="proGrey proNormal me-5 d-flex">
              <Link to="/">
                <HiUsers className="proGrey proIcon me-2" />
              </Link>
              <div>
                <Link to="/">
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} profile views </span>
                </Link>
                <br />
                <span className="proGrey proLight proSmall">Discover who's viewed your profile.</span>
              </div>
            </div>
            <div className="proGrey proNormal me-5 d-flex">
              <Link to="/">
                <BiSearch className="proGrey proIcon me-2" />
              </Link>
              <div>
                <Link to="/">
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} search appearance</span>
                </Link>
                <br />
                <span className="proGrey proLight proSmall">See how often you appear in search results</span>
              </div>
            </div>
          </div>
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
          <Link to="/">
            <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
          <div className="proBlack prosmall proLight mt-2">{selProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Activity</h2>
          <Link to="/">
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
                                <Link to={`/user/${singPost.user?._id}`}>
                                  <span className="proBlack proGreyHBlue">{singPost.user?.name}</span>
                                </Link>
                              </h3>
                              <div className="my-2 me-5 mx-4">
                                <span className="proGrey proBlack proLight proSmall proNormal">{singPost.text}</span>
                              </div>
                              <img className="my-3 mx-4 rounded-2" src={singPost.image} alt="imgPerson" />
                            </div>
                            <div className="proSmall proLight mx-4">edited: {singPost.updatedAt.slice(0, 10)}</div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  );
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
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Education</h2>
          <div className="proBlack prosmall proLight mt-2">{selProfile.bio}</div>
        </div>
      </div>
    </>
  );
}
