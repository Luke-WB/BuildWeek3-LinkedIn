import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ModaleAdd from "./ModaleAdd";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/management-suitcase-icon-outline-work-job-vector.jpg";
import Modale from "./Modale";

const NewPersonExperience = ({ myProfile }) => {

  console.log("OOOOOOOOOOOOOOOO" ,myProfile._id
  );

  const userKey =  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs` 

  const [experiencesToRender, setExperiencesToRender] = useState([]);

  console.log("cosa cavolo è myProfile", myProfile);
  
  async function getExperience(id, key) {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
    try {
      const response = await fetch(urlToFetch, {
        method: "GET",
        headers: {
          Authorization: key,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExperiencesToRender(data);
        console.log(data);
      } else {
        alert("perch");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getExperience(myProfile._id, userKey);
  }, [myProfile]);

  return (
    <>
      <div className="d-flex">
        <h1 className="mt-2">Experience</h1>
      </div>
      {experiencesToRender.map((el) => (
        <div key={el._id}>
          <Row>
            <Col ms={6} md={3}>
              <div className="parteUno rounded-2">
                <img src={el.image ? el.image : logo} alt="pic-job" style={{ height: "75px", width: "75px" }} />
              </div>
            </Col>
            <Col ms={6} md={9}>
              <div className="parteDue">
                <p className="titolo m-0">{el.role}</p>
                <p className="m-0">{el.company}</p>
                <p className="m-0">
                  <i style={{ color: "#9B9B9B" }}>
                    {el.startDate}/{el.endDate}
                  </i>
                </p>
                <p className="m-0" style={{ color: "#5a5a5a" }}>
                  {el.area}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default NewPersonExperience;