import { useState } from "react"
import { Button, Modal, Row, Col } from "react-bootstrap"
import logo from "../assets/management-suitcase-icon-outline-work-job-vector.jpg"

const Exprience = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          //   height: "300px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative"
      >
        <div className="mt-5 mx-4">
          <h1 className="mt-2">Experience</h1>

          <Row>
            <Col ms={6} md={3}>
              <div className="parteUno ">
                <img src={logo} alt="pic-job" style={{ width: "70px", height: "70px", objectFit: "cover" }} />
              </div>
            </Col>
            <Col ms={6} md={9}>
              <div className="parteDue">
                <p className="titolo m-0">Studente</p>
                <p className="m-0">Università degli Studi di Genova - FullTime</p>
                <p className="m-0">
                  <i style={{ color: "#9B9B9B" }}>Sep 2013 - Present - 9yrs 6 mos</i>
                </p>
                <p className="m-0" style={{ color: "#5a5a5a" }}>
                  Genova, Liguria, Italia
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Exprience
