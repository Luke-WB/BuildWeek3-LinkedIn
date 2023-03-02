import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { HiOutlineClock, HiDocumentText } from "react-icons/hi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import {
  BsFillPlayBtnFill,
  BsCaretDownFill,
  BsThreeDots,
} from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const ModalePost = ({ show, handleClose, check, ternaryCheck }) => {
  const dispatch = useDispatch;
  const addPost = {
    text: "",
  };
  const [objPost, setObjPost] = useState(addPost);
  const handleChange = (field, value) => {
    setObjPost((prev) => ({ ...prev, [field]: value }));
  };

  console.log("ternaryCheck", ternaryCheck);
  console.log("comparison", ternaryCheck === true);
  // const token = useSelector((state) => state.profile.token)
  // useEffect(() => {
  //   dispatch(fetchProfile(token));
  // }, []);
  const myProfile = useSelector((state) => state.profile.profile);

  let enabled = objPost.text.length > 0;

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
        <Modal.Title className="modalColor modalTitle">
          Create a post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div className="d-flex">
          <div>
            <img
              className="my-3 ms-4 me-3 rounded-circle"
              style={{ height: "55px" }}
              src={myProfile.image}
              alt="portrait"
            />
          </div>
          <div>
            <div className="proNormal">
              <span className="me-2">{myProfile.name}</span>
              <span>{myProfile.surname}</span>
            </div>
            <Button className="proMore mt-1" variant="outline-primary">
              Anyone <BsCaretDownFill />
            </Button>
          </div>
        </div>
        <Form.Control
          className="visible modaltextArea"
          placeholder="What do you want to talk about?"
          as="textarea"
          rows={6}
          type="text"
          onChange={(e) => handleChange("text", e.target.value)}
        />
        <div>
          <VscSmiley className="iconSmile my-3" />
        </div>
        <Form.Group className="d-flex justify-content-between align-items-center modalIcon">
          <div>
            <div className="d-inline-block modalHGrey">
              <MdPhotoSizeSelectActual className="proIcon mx-2" />
            </div>
            <div className="d-inline-block modalHGrey">
              <BsFillPlayBtnFill className="proIcon mx-2" />
            </div>
            <div className="d-inline-block modalHGrey">
              <HiDocumentText className="proIcon mx-2" />
            </div>
            <div className="d-inline-block modalHGrey">
              <BsThreeDots className="proIcon mx-2" />
            </div>
            <span className="modalOrrBar"></span>
            <div className="d-inline-block modalHGrey">
              <BiMessageRoundedDetail className="ms-3 me-1 messageTrans" />
            </div>

            <span className="proVerySmall proMiddle modalHoverText">
              Anyone
            </span>
          </div>
          <div>
            <div className="d-inline-block modalHGrey">
              <HiOutlineClock className="proIcon mx-2" />
            </div>
            <Button
                  className="proOpenTo modalButtonGrey ms-2"
                  variant="primary"
                  disabled={!enabled}
                  onClick={() => {
                    postPost();
                    handleClose();
                    check();
                  }}
                >post</Button>
            {/* {ternaryCheck !== true ? (
              <>
                <Button
                  className="proOpenTo modalButtonGrey ms-2"
                  variant="primary"
                  disabled={!enabled}
                  onClick={() => {
                    postPost();
                    handleClose();
                    check();
                  }}
                >
                  pippo
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="proOpenTo modalButtonGrey ms-2"
                  variant="primary"
                  disabled={!enabled}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  put
                </Button>
              </>
            )} */}
          </div>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default ModalePost;
