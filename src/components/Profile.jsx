import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
    return (
        <>
        <div className="d-flex flex-column align-items-start">
        <img src="qualcosa" alt="react rompe"/>
        <div>
            <h1>Nome Profilo</h1>
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