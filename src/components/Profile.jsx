import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { HiUsers } from "react-icons/hi";
import { AiOutlineArrowRight, AiFillEye } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaSatelliteDish } from "react-icons/fa";

const Profile = () => {
  const token = useSelector((state) => state.profile.token)
  const myProfile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfile(token));
  }, []);
  // console.log(myProfile);
  console.log("random number");
  return (
    <>
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="proImgBarSetting">
          <a href="#">
            <img
              className="proImgBarSetting"
              style={{ objectFit: "cover", objectPosition: "top" }}
              src={
                "https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"
              }
              alt="immagine background"
            />
          </a>
        </div>
        <a href="#">
          <img
            className="rounded-circle position-absolute proAbsolute"
            src={
              "https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"
            }
            alt="immagine profilo"
          />
        </a>
        <div className="mt-5 mx-4">
          <h2 className="mt-2 mb-0">
            {myProfile.name} {myProfile.surname}
          </h2>
          <div className="proBlack proMedium proLight">{myProfile.title}</div>
          <a href="#">
            <div className="proGrey proLight proGreyHBlue mt-2">
              {myProfile.email}
            </div>
          </a>
          <div className="mt-2">
            <a href="#">
              <span className="proGrey proLight proGreyHBlue">
                {myProfile.area}
              </span>
            </a>{" "}
            -{" "}
            <a href="#">
              <span className="proBlue">Contact info</span>
            </a>
          </div>
          <a href="#">
            <div className="proBlue mt-2 mb-3">
              {Math.floor(Math.random() * 100)} connection
            </div>
          </a>
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
              <a href="#">
                <HiUsers className="proGrey proIcon me-2" />
              </a>
              <div>
                <a href="#">
                  <span className="proGrey proGreyHBlue">
                    {Math.floor(Math.random() * 100)} profile views{" "}
                  </span>
                </a>
                <br />
                <span className="proGrey proLight proSmall">
                  Discover who's viewed your profile.
                </span>
              </div>
            </div>
            <div className="proGrey proNormal me-5 d-flex">
              <a href="#">
                <BiSearch className="proGrey proIcon me-2" />
              </a>
              <div>
                <a href="#">
                  <span className="proGrey proGreyHBlue">
                    {Math.floor(Math.random() * 100)} search appearance
                  </span>
                </a>
                <br />
                <span className="proGrey proLight proSmall">
                  See how often you appear in search results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">About</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Experience</h2>
          <a href="#">
            <div className="proBlue my-0">
              {Math.floor(Math.random() * 100)} connection
            </div>
          </a>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Activity</h2>
          <a href="#">
            <div className="proBlue my-0">
              {Math.floor(Math.random() * 100)} connection
            </div>
          </a>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>

      {/* <div>Experience</div> <-------- da fare domani */}
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">interest</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start bg-light rounded-4 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Education</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>
    </>
  )
}

export default Profile
