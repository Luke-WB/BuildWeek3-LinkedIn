import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ModaleAdd from "./ModaleAdd";
import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/management-suitcase-icon-outline-work-job-vector.jpg";
import { BiPencil } from "react-icons/bi";
import Modale from "./Modale";

const Exprience = () => {
  const [modalShowPlus, setModalShowPlus] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isDeleted, setISDeleted] = useState(true);
  const [experiencesToRender, setExperiencesToRender] = useState([]);

  async function getExp() {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences`;
    try {
      const response = await fetch(urlToFetch, {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExperiencesToRender(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteExperience(id) {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/${id}`;
    try {
      await fetch(
        urlToFetch,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          },
        },
        setISDeleted(false),
        console.log("deleted", isDeleted)
      );
    } catch (error) {
      console.log("delete", error);
    }
  }

  useEffect(() => {
    getExp();
  }, [isDeleted]);

  return (
    <>
      <div className="d-flex ">
        <h1 className="mt-2">Experience</h1>
        <Button className="position-absolute plus" id="bottoneModale" onClick={() => setModalShowPlus(true)}>
          <BsPlusLg />
        </Button>
        <ModaleAdd show={modalShowPlus} onHide={() => setModalShowPlus(false)} render={getExp} />
      </div>
      {experiencesToRender.map((el, i) => (
        <div key={el._id}>
          <Button className="position-absolute matita" id="bottoneModale" onClick={() => setModalShow(true)}>
            <BiPencil />
          </Button>
          <Modale
            show={modalShow}
            id={el._id}
            onHide={() => setModalShow(false)}
            delete={deleteExperience}
            render={getExp}
          />

          <Row>
            <Col ms={6} md={3}>
              <div className="parteUno ">
                <img
                  src={logo}
                  alt="pic-job"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                />
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

export default Exprience;
