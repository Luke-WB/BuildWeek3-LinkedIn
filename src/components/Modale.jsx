import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BiPencil } from "react-icons/bi";

function Modale(props) {
  const [modalShow, setModalShow] = useState(false);
  const [isDeleted, setISDeleted] = useState(true);
  const [newState, setNewState] = useState({});

  const handleChange = (field, value) => {
    setNewState((prev) => ({ ...prev, [field]: value }));
  };

  async function deleteExperience() {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/${props.id}`;
    try {
      await fetch(
        urlToFetch,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          },
        },
        setISDeleted(false),
        console.log("DELETE", isDeleted)
      );
    } catch (error) {
      console.log("delete", error);
    }
  }

  async function putExperience(id) {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/${props.id}`;
    try {
      console.log(newState);
      const res = await fetch(urlToFetch, {
        method: "PUT",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newState),
      });
      if (res.ok) {
        let modifica = await res.json();
        console.log("PUT", modifica);
      } else {
        console.log("error");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Button className="position-absolute matita" id="bottoneModale" onClick={() => setModalShow(true)}>
        <BiPencil />
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Text className="text-muted">* Indicates required</Form.Text>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Text className="text-muted">Title*</Form.Text>
              <Form.Control
                type="email"
                placeholder="Ex: Retails Sales Manager"
                required
                onChange={(e) => handleChange("role", e.target.value)}
              />
            </Form.Group>
            <Form.Text className="text-muted">Employment type</Form.Text>
            <Form.Select aria-label="Default select example">
              <option>Please select</option>
              <option value="1">Full-time</option>
              <option value="2">Part-time</option>
              <option value="3">Self-employed</option>
              <option value="4">Frelance</option>
              <option value="5">Contract</option>
              <option value="6">Internship</option>
              <option value="7">Apprenticeship</option>
              <option value="8">Seasonal</option>
            </Form.Select>
            <p>Learn more about employment types.</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text className="text-muted">Company name*</Form.Text>
              <Form.Control type="email" placeholder="Ex: Microsoft" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text className="text-muted">Location*</Form.Text>
              <Form.Control type="email" placeholder="Ex: Lonon, United Kingdom" required />
            </Form.Group>
            <Form.Text className="text-muted">Location type</Form.Text>
            <Form.Select aria-label="Default select example">
              <option>Please select</option>
              <option value="1">One-site</option>
              <option value="2">Hybrid</option>
              <option value="3">Remote</option>
            </Form.Select>
            <Form.Text className="text-muted">Pick a location type (ex: remote)</Form.Text>
            <Form.Group className="my-4 d-flex align-items-center" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
              <Form.Text className="text-muted ms-3">I am currently working in this role</Form.Text>
            </Form.Group>
            <Form.Text className="text-muted">Start date*</Form.Text>
            <div className="d-flex gap-2 mb-4">
              <Form.Select aria-label="Mounth">
                <option>Mounth</option>
                <option value="1">Gennaio</option>
                <option value="2">Febbraio</option>
                <option value="3">Marzo</option>
                <option value="4">Aprile</option>
                <option value="5">Maggio</option>
                <option value="6">Giugno</option>
                <option value="7">Luglio</option>
                <option value="8">Agosto</option>
                <option value="9">Settembre</option>
                <option value="10">Ottobre</option>
                <option value="11">Novembre</option>
                <option value="12">Dicembre</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Year</option>
                <option value="1">2023</option>
                <option value="2">2022</option>
                <option value="3">2021</option>
              </Form.Select>
            </div>
            <Form.Text className="text-muted">End date*</Form.Text>
            <div className="d-flex gap-2">
              <Form.Select aria-label="Mounth">
                <option>Mounth</option>
                <option value="1">Gennaio</option>
                <option value="2">Febbraio</option>
                <option value="3">Marzo</option>
                <option value="4">Aprile</option>
                <option value="5">Maggio</option>
                <option value="6">Giugno</option>
                <option value="7">Luglio</option>
                <option value="8">Agosto</option>
                <option value="9">Settembre</option>
                <option value="10">Ottobre</option>
                <option value="11">Novembre</option>
                <option value="12">Dicembre</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Year</option>
                <option value="1">2023</option>
                <option value="2">2022</option>
                <option value="3">2021</option>
              </Form.Select>
            </div>
            <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
              <Form.Text className="text-muted">Description</Form.Text>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div>
            <h5>Skills</h5>
            <p> We recommend adding your top 5 used in this role. They’ll also appear in your Skills section.</p>
            <Button className="proModProfile" variant="outline-primary">
              + Add skill
            </Button>
          </div>
          <div>
            <h5>Media</h5>
            <p>
              Add or link to external documents, photos, sites, videos, and presentations. Learn more about{" "}
              <a href="#">media file types supported</a>
            </p>
            <Button className="proModProfile" variant="outline-primary">
              + Add media
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            onClick={() => {
              deleteExperience();
              props.render();
              setModalShow(false);
              props.checking();
            }}
            variant="outline-danger"
          >
            Delete experience
          </Button>
          <Button
            className="proOpenTo"
            onClick={() => {
              putExperience();
              setModalShow(false);
              props.render();
              props.checking();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
