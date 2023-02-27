import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SinglePerson from "./SinglePerson";

export default function People() {
  const [isTrue, setIsTrue] = useState(false);
  const [peopleToRender, setPeopleToRender] = useState([]);

  const profili_utente = "https://striveschool-api.herokuapp.com/api/profile/";

  const fetchUser_Profile = async () => {
    try {
      const response = await fetch(profili_utente, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU`,
        },
      });
      if (response.ok) {
        let data = await response.json();
        if (isTrue === false) {
          setPeopleToRender(data.slice(0, 5));
        } else {
          setPeopleToRender(data.slice(0, 10));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser_Profile();
  }, [isTrue]);

  console.log(peopleToRender);
  return (
    <>
      <h3>People you may know</h3>
      <Row>
        {peopleToRender.map((el) => (
          <SinglePerson personInfo={el} />
        ))}
      </Row>
      <Row>
        <Button
          className="bg-secondary"
          onClick={() => {
            isTrue ? setIsTrue(false) : setIsTrue(true);
          }}
        >
          {" "}
          Show {isTrue ? "less" : "more"}
        </Button>
      </Row>
    </>
  );
}
