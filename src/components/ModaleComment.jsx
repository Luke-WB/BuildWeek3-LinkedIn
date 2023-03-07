import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";

const ModaleComment = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [putInput, setPutInput] = useState({});

  const handleChange = (field, value) => {
    setPutInput((prev) => ({ ...prev, [field]: value }));
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
        body: JSON.stringify(putInput),
      });
      if (response.ok) {
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
          <Modal.Title>Modify your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Write here..."
              rows={3}
              onChange={(e) => handleChange("comment", e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="outline-danger"
            onClick={() => {
              deleteComments(props.id);
              props.check();
              handleClose();
            }}
          >
            Delete Comment
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              putComments(props.id);
              props.check();
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
