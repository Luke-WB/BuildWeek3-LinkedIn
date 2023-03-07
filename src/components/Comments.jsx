import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ModaleComment from "./ModaleComment";

export default function Comments({ singlePostId }) {
  let body = {
    comment: "",
    rate: "3",
    elementId: singlePostId,
  };

  const [commentsArray, setCommentArray] = useState([]);
  const [input, setInput] = useState(body);
  const [rendered, setRendered] = useState(false);

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  function check() {
    setRendered((prevState) => !prevState);
  }

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singlePostId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
        },
      });
      if (response.ok) {
        const postComment = await response.json();
        setCommentArray(postComment.reverse());
      }
    } catch (error) {
      alert("comment", error);
    }
  };

  const fetchPostComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.ok) {
      }
    } catch (error) {
      alert("testComment", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [rendered]);

  return (
    <>
      <Form>
        <Row className="align-items-center">
          <Col className="col-10">
            <Form.Control
              type="text"
              placeholder="Start a comment"
              className="d-inline-block proMore proGrey position-relative postModBar me-3"
              onChange={(e) => handleChange("comment", e.target.value)}
            />
          </Col>
          <Col className="col-2">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                fetchPostComments();
                check();
              }}
            >
              Send
              {/* AGGIUNGERE ICONA D'INVIO */}
            </Button>
          </Col>
        </Row>
      </Form>

      {commentsArray.map((el, i) => (
        <>
          <div key={i}>
            <div className="d-flex justify-content-between">
              {el.author} Author
              <div>
                {el.createdAt}
                <ModaleComment check={check} id={el._id} />
              </div>
            </div>
            <div>{el.comment}</div>
          </div>
        </>
      ))}
    </>
  );
}
