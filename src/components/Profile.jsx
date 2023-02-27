import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { HiUsers } from "react-icons/hi";
import { AiOutlineArrowRight, AiFillEye } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaSatelliteDish } from "react-icons/fa";

const Profile = () => {
  const token = useSelector((state) => state.profile.token);
  const myProfile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(token));
  }, []);
  // console.log(myProfile);
  console.log("random number");
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "500px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div style={{ height: "200px", width: "100%" }}>
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={
              "https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"
            }
            alt="immagine background"
          />
        </div>
        <img
          className="rounded-circle position-absolute "
          style={{
            width: 150,
            top: "100px",
            left: "25px",
            border: "solid 4px white",
          }}
          src={
            "https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"
          }
          alt="immagine profilo"
        />
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">
            {myProfile.name} {myProfile.surname}
          </h3>
          <p className="my-0">{myProfile.title}</p>
          <p className="proGrey my-0">{myProfile.email}</p>
          <p className="proGrey">
            {myProfile.area} -{" "}
            <a href="#">
              <span className="proBlue">Contact info</span>
            </a>
          </p>
          <p className="proBlue">
            {Math.floor(Math.random() * 100)} connection
          </p>
          <Button className="proOpenTo me-2" variant="primary">
            Open to
          </Button>
          <Button className="proModProfile me-2" variant="outline-primary">
            Add profile section
          </Button>
          <Button className="proMore me-2" variant="outline-primary">
            Add profile section
          </Button>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "200px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">Analitics</h3>
          <p className="proGrey">
            <AiFillEye />
            private to you
          </p>
          <div className="d-flex">
            <div className="proGrey me-5" style={{ fontSize: "15px", fontWeight:"500"}}>
              <HiUsers style={{ fontSize: "25px", fontWeight:"500" }} className="me-2" /><span className="proGreyHBlue">{Math.floor(Math.random() * 100)} profile views </span><br /><span style={{ fontWeight: "300"}}>Discover who's viewed your profile.</span>
            </div>
            <div className="proGrey me-5" style={{ fontSize: "15px", fontWeight:"500"}}>
              <BiSearch style={{ fontSize: "25px", fontWeight:"500" }} className="me-2" /><span className="proGreyHBlue">{Math.floor(Math.random() * 100)} {Math.floor(Math.random() * 100)} search appearance</span><br /><span style={{ fontWeight: "300"}}>See how often you appear in search results</span>
            </div>
            <div className="proGrey"  style={{ fontSize: "15px", fontWeight:"500"}}>
              <BiSearch style={{ fontSize: "25px" }} className="me-2" /> <span className="proGreyHBlue">{Math.floor(Math.random() * 100)} search appearance<br />See how often you appear in search results</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">About</h3>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "150px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">Activity</h3>
          <p className="text-secondary">cose a caso</p>
        </div>
      </div>

      {/* <div>Experience</div> <-------- da fare domani */}
      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">interest</h3>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h3 className="mt-2 mb-1">Education</h3>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
