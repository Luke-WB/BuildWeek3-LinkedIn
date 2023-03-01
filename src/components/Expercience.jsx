import { useState } from "react"
import { Button, Modal, Row, Col, Form } from "react-bootstrap"
import { BiPencil } from "react-icons/bi"
import { BsPlusLg } from "react-icons/bs"
import logo from "../assets/management-suitcase-icon-outline-work-job-vector.jpg"
import HomeProfile from "./HomeProfile"
import Modale from "./Modale"
import ModaleAdd from "./ModaleAdd"

const Exprience = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const [modalShowPlus, setModalShowPlus] = useState(false)
  return (
    <>
      <div>
        <div className="d-flex ">
          <h1 className="mt-2">Experience</h1>
          <Button className="position-absolute plus" id="bottoneModale" onClick={() => setModalShowPlus(true)}>
            <BsPlusLg />
          </Button>

          <ModaleAdd show={modalShowPlus} onHide={() => setModalShowPlus(false)} />

          <Button className="position-absolute matita" id="bottoneModale" onClick={() => setModalShow(true)}>
            <BiPencil />
          </Button>

          <Modale show={modalShow} onHide={() => setModalShow(false)} />
        </div>
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
      <div></div>
    </>
  )
}

export default Exprience
