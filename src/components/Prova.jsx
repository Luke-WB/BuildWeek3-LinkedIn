import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Prova = () => {
  const [data, setData] = useState([]);
  const getPost = async () => {
    const urlHomeGet = `https://striveschool-api.herokuapp.com/api/posts/`;
    try {
      const res = await fetch(urlHomeGet, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
        },
      });
      if (res.ok) {
        const aito = await res.json();
        setData(aito);
        console.log("post", aito);
      } else {
        console.log("error");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {data.map((singPost, i) => {
        return (
          <>
            <div
              key={i + "post"}
              className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
            >
              <div className="my-2 mx-4">
                <h3 className="proBlack my-2">
                  writted by{" "}
                  <Link to={`/user/${singPost.user?._id}`}>
                    <span className="proBlack proGreyHBlue">{singPost.user?.name}</span>
                  </Link>
                </h3>
                <div className="my-2 me-5">
                  <span className="proGrey proBlack proLight proSmall proNormal">{singPost.text}</span>
                </div>
                <div className="proSmall proLight">edited: {singPost.updatedAt.slice(0, 10)}</div>
                <Button className="proModProfile me-3 my-3" variant="outline-primary">
                  Add
                </Button>
                <Button className="proDelete" variant="danger">
                  Delete
                </Button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Prova;
