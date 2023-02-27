import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions"

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
        <div className="d-flex flex-column align-items-start">
        <img src="qualcosa" alt="react rompe"/>
        <div>
            <h1>{myProfile.name}{myProfile.surname}</h1>
            <p>Lavoro che fai</p>
            <p>mail</p>
        </div>
        </div>
        <div>Analytics</div>
        <div>Resources</div>
        <div>Bio - About</div>
        <div>Activity</div>
        {/* <div>Experience</div> <-------- da fare domani */}
        <div>Education</div>
        <div>Interest</div>




        </>
    )
}

export default Profile