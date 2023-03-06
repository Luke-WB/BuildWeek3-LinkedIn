import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";

const ModaleComment = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [putInput, setPutInput] = useState(null);

  const handlePutChange = (e) => {
    setPutInput(e.target.value);
    console.log(e);
  };

  let putCommentsObj = {
    comment: putInput,
  };

  const putComments = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putCommentsObj),
      });
      if (response.ok) {
        console.log("testComment", response);
      }
    } catch (error) {
      alert("testComment", error);
    }
  };

  const deleteComments = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
        },
      });
      if (response.ok) {
      }
    } catch (error) {
      alert("comment", error);
    }
  };

  return (
    <>
      <BiPencil className="proGrey proIcon me-2" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type={"text"} onChange={handlePutChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteComments(props.id);
              props.get();
              handleClose();
            }}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              putComments(props.id);
              props.get();
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModaleComment;
