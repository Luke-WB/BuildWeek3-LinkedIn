import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddObj({ idAdd, img }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fd, setFd] = useState(new FormData());
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${idAdd}/picture`, {
      method: "POST",
      body: fd,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
      },
    });
  };
  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("profile");
      prev.append("profile", ev.target.files[0]);
      return prev;
    });
  };
  return (
    <>
      <Link className="link-fix">
        <img
          className="rounded-circle position-absolute proAbsolute"
          src={img}
          alt="immagine profilo"
          onClick={handleShow}
        />
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor modalTitle">Add your photo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <Form.Control
            encType="multipart/form-data"
            className="modalFile pt-2 pb-3"
            placeholder="Select images to share"
            as="input"
            rows={1}
            type="file"
            accept=".jpg"
            onChange={handleFile}
          />
          <Form.Group className="d-flex justify-content-between align-items-center modalIcon">
            <div className="mt-3">
              <Button
                className="proOpenTo modalButtonGrey ms-2"
                variant="outline-primary"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
              <Button
                className="proOpenTo modalButtonGrey ms-2"
                variant="primary"
                onClick={(ev) => {
                  handleSubmit(ev);
                  handleClose();
                }}
              >
                Done
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}
