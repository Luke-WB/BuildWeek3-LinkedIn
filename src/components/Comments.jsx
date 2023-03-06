import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiPencil, BiSearch } from "react-icons/bi";
import ModaleComment from "./ModaleComment";

export default function Comments({ singlePostId }) {
  const [commentsArray, setCommentArray] = useState([]);

  const [input, setInput] = useState(null);

  const [showPost, setShowPost] = useState(false);
  const handleClosePost = () => setShowPost(false);
  const handleShowPost = () => setShowPost(true);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e);
  };

  let body = {
    comment: input,
    rate: "3",
    elementId: singlePostId,
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singlePostId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
        },
      });
      if (response.ok) {
        let postComment = await response.json();
        console.log("response comment", postComment);
        setCommentArray(postComment.reverse());
      }
    } catch (error) {
      alert("comment", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchPostComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        console.log("testComment", response);
      }
    } catch (error) {
      alert("testComment", error);
    }
  };

  console.log("commentsArray", commentsArray);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPostComments();
          fetchComments();
        }}
      >
        <input
          type="text"
          placeholder="Start a post"
          className="d-inline-block proMore proGrey position-relative postModBar me-3"
          onChange={handleChange}
        />
      </form>

      {commentsArray.map((el, i) => (
        <>
          <di key={i}>
            <div className="d-flex justify-content-between">
              {el.author} Author
              <div>
                {el.createdAt}
                <ModaleComment get={fetchComments} id={el._id} />
              </div>
            </div>
            <div>{el.comment}</div>
          </di>
        </>
      ))}
    </>
  );
}
