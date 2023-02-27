import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProfile } from "../redux/actions"
import NavCustom from "./NavCustom"

const Profile = () => {
  const token = useSelector((state) => state.profile.token)
  const myProfile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfile(token))
  }, [])
  console.log(myProfile)
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "400px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div style={{ height: "150px", width: "100%" }}>
          <img
            style={{ width: "100%", height: "150px", objectFit: "cover", objectPosition: "top" }}
            src={myProfile.image}
            alt="immagine background"
          />
        </div>
        <img
          className="rounded-circle position-absolute "
          style={{
            width: 100,
            top: "100px",
            left: "25px",
            border: "solid 5px white",
          }}
          src={myProfile.image}
          alt="immagine profilo"
        />
        <div className="mt-5 mx-4">
          <h1 className="mt-2">
            {myProfile.name} {myProfile.surname}
          </h1>
          <p>{myProfile.title}</p>
          <p className="text-secondary">{myProfile.email}</p>
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
          <h1 className="mt-2">Analitics</h1>
          <p className="text-secondary">private to you</p>
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
          <h1 className="mt-2">About</h1>
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
          <h1 className="mt-2">Activity</h1>
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
          <h1 className="mt-2">interest</h1>
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
          <h1 className="mt-2">Education</h1>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>
    </>
  )
}

export default Profile
