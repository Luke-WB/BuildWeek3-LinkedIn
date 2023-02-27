import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
import Spinner from "react-bootstrap/Spinner";

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
    <>
      <h3>People you may know</h3>
      <Row>
        {loading ? (
          <Spinner animation="border" variant="primary" className="m-auto my-5" />
        ) : (
          peopleToRender.map((el, i) => <SinglePerson personInfo={el} key={i} />)
        )}
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
