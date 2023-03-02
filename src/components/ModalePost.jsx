import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {HiOutlineClock} from "react-icons/hi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill, BsCalendarDay } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import {BsThreeDots} from "react-icons/bs"

const ModalePost = ({ show, handleClose, check }) => {
  const addPost = {
    text: "",
  };
  const [objPost, setObjPost] = useState(addPost);
  const handleChange = (field, value) => {
    setObjPost((prev) => ({ ...prev, [field]: value }));
  };

  const [newPost, setPost] = useState([]);
  async function postPost() {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const res = await fetch(urlToFetch, {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objPost),
      });
      if (res.ok) {
        const addPost = await res.json();
        console.log("testPOST", addPost);
        setPost(addPost);
      } else {
        console.log("error");
      }
    } catch (error) {
      alert(error);
    }
  }



  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modalColor modalTitle">Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <Form.Control
          className="visible modaltextArea"
          placeholder="What do you want to talk about?"
          as="textarea"
          rows={6}
          onChange={(e) => handleChange("text", e.target.value)}
        />
        <Form.Group className="d-flex justify-content-between align-items-center modalIcon">
            <div><MdPhotoSizeSelectActual className="proIcon me-3"/><BsFillPlayBtnFill className="proIcon me-3"/><BsCalendarDay className="proIcon me-3"/></div>
          <div><HiOutlineClock className="proIcon me-2"/><Button className="proOpenTo"
            variant="primary"
            onClick={() => {
              postPost();
              handleClose();
              check();
            }}
          >
            Post
          </Button></div>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default ModalePost;
