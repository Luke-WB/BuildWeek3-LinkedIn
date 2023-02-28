import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
import Spinner from "react-bootstrap/Spinner";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

export default function People() {
  const [isTrue, setIsTrue] = useState(false);
  const [peopleFetched, setPeopleFetched] = useState([]);
  const [peopleToRender, setPeopleToRender] = useState([]);
  const [loading, setLoading] = useState(true);

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/";

  useEffect(() => {
    const fetchUser_Profile = async () => {
      try {
        const response = await fetch(profili_utente, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          setPeopleFetched(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser_Profile();
  }, []);

  useEffect(() => {
    if (!isTrue) {
      setPeopleToRender(peopleFetched.slice(0, 5));
    } else {
      setPeopleToRender(peopleFetched.slice(0, 10));
    }
  }, [isTrue]);

  useEffect(() => {
    setPeopleToRender(peopleFetched.slice(0, 5));
  }, [peopleFetched]);

  return (
    <div
      className="bg-light rounded-4d-flex flex-column align-items-center my-4 rounded-4"
      style={{ border: "solid 1px rgba(176, 176, 176, 0.5)" }}
    >
      <h5 className="m-4">
        <b>People you may know</b>
      </h5>
      <Col className="mx-4">
        {loading ? (
          <Spinner animation="border" variant="primary" className="m-auto my-5" />
        ) : (
          peopleToRender.map((el) => <SinglePerson personInfo={el} />)
        )}
      </Col>
      <Row>
        <div
          className="my-1"
          style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
          onClick={() => {
            isTrue ? setIsTrue(false) : setIsTrue(true);
          }}
        >
          <b>
            {" "}
            {isTrue ? (
              <p>
                {" "}
                Show less <BsChevronCompactUp />
              </p>
            ) : (
              <p>
                {" "}
                Show more <BsChevronCompactDown />
              </p>
            )}
          </b>
        </div>
      </Row>
    </div>
  );
}
