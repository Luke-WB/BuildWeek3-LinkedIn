import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProfile, showModalExp } from "../redux/actions"
import { HiUsers } from "react-icons/hi"
import { AiOutlineArrowRight, AiFillEye } from "react-icons/ai"
import { BiSearch, BiPencil } from "react-icons/bi"
import { FaSatelliteDish } from "react-icons/fa"
import Exprience from "./Expercience"
import ModalEsperience from "../components/ModalExperience"
import Home from "./Home"

const Profile = () => {
  /* MODALE*/
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const token = useSelector((state) => state.profile.token)
  const myProfile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfile(token))
  }, [])
  // console.log(myProfile);
  console.log("random number")

  const showExp = useSelector((state) => state.profile.showExp);
  const toggleModal = (param) => {
    dispatch(showModalExp(param));
  }

  return (
    <>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="proImgBarSetting">
          <a href="#">
            <img
              className="proImgBarSetting"
              style={{ objectFit: "cover", objectPosition: "top" }}
              src={"https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"}
              alt="immagine background"
            />
          </a>
        </div>
        <a href="#">
          <img
            className="rounded-circle position-absolute proAbsolute"
            src={"https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"}
            alt="immagine profilo"
          />
        </a>
        <div className="mt-5 mx-4">
        
        <h2 className="mt-2 mb-0">
          {myProfile.name} {myProfile.surname}
        </h2>
        <div className="proBlack proMedium proLight">{myProfile.title}</div>
        <a href="#">
          <div className="proGrey proLight proGreyHBlue mt-2">{myProfile.email}</div>
        </a>
        <div className="mt-2">
          <a href="#">
            <span className="proGrey proLight proGreyHBlue">{myProfile.area}</span>
          </a>

          <a href="#">
            <span className="proBlue">Contact info</span>
          </a>
        </div>
        <a href="#">
          <div className="proBlue mt-2 mb-3">{Math.floor(Math.random() * 100)} connection</div>
        </a>
        <Form className="mb-4">
          <Button className="proOpenTo me-3" variant="primary">
            Open to
          </Button>
          <Button className="proModProfile me-3" variant="outline-primary">
            Add profile section
          </Button>
          <Button className="proMore me-3" variant="outline-primary">
            Add profile section
          </Button>
        </Form>

        {/*MODALE*/}

        <Button onClick={handleShow}>Launch demo modal</Button>
        <Modal show={show} onHide={handleClose} style={{ height: "50%", position: "fixed", top: "30px" }}>
          <Modal.Header closeButton className="fixed-top">
            <Modal.Title className="fw-normal fs-5">Modifica introduzione</Modal.Title>
          </Modal.Header>
          <p className="text-secondary fw-light ms-3" style={{ fontSize: "12px" }}>
            * Indica che il campo è obbligatorio
          </p>
          <Modal.Body style={{ overflowY: "scroll" }}>
            <Form className="text-secondary">
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Nome*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Cognome*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Nome aggiuntivo*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <p> Pronuncia del nome</p>
              <p> Può essere aggiunta solo usando la nostra app per dispositivi mobili</p>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Inserisci pronomi personalizzati</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te
                </Form.Text>
                <p> Scopri di più sui pronomi di genere</p>
              </Form.Group>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Sommario*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <h4> Posizione attuale</h4>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Posizione lavorativa*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="d-flex">
                <Form.Check aria-label="option 1" />
                <p>Mostra l'azienda attuale nella mia presentazione</p>
              </div>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">settore*</Form.Label>
                <Form.Control type="text" />
                <p> Scopri di più sulle opzioni relative al settore</p>
              </Form.Group>
              <h4> Formazione</h4>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Formazione*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="d-flex">
                <Form.Check aria-label="option 1" />
                <p>Mostra l'azienda attuale nella mia presentazione</p>
              </div>
              <h4> Località</h4>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Paese/Area geografica*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">CAP</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Città</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <h4> Informazioni di contatto</h4>
              <p> Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>

              <p className="text-primary">Modifica le informazioni di contatto </p>
              <h4> Sito Web</h4>
              <Form.Text className="text-muted">
                Aggiungi un link che apparirà nella parte superiore del tuo profilo
              </Form.Text>
              <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                <Form.Label className="mb-1">Link</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" className="rounded-5" onClick={handleClose}>
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-2 mx-4">
          <h2 className="mt-2 mb-0">Analitics</h2>
          <div className="proGrey proLight proSmall my-0">
            <AiFillEye className="proIcon me-2" />
            private to you
          </div>
          <div className="d-flex my-3">
            <div className="proGrey proNormal me-5 d-flex">
              <a href="#">
                <HiUsers className="proGrey proIcon me-2" />
              </a>
              <div>
                <a href="#">
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} profile views </span>
                </a>
                <br />
                <span className="proGrey proLight proSmall">Discover who's viewed your profile.</span>
              </div>
            </div>
            <div className="proGrey proNormal me-5 d-flex">
              <a href="#">
                <BiSearch className="proGrey proIcon me-2" />
              </a>
              <div>
                <a href="#">
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} search appearance</span>
                </a>
                <br />
                <span className="proGrey proLight proSmall">See how often you appear in search results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">About</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Experience</h2>
          <a href="#">
            <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
          </a>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
        <BiPencil className="position-absolute top-0 end-0 m-4" onClick={() => toggleModal(showExp)}/>
        <ModalEsperience/>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Activity</h2>
          <a href="#">
            <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
          </a>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Interest</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">Education</h2>
          <div className="proBlack prosmall proLight mt-2">{myProfile.bio}</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <Exprience />
        </div>
      </div>
    </>
  )
}

export default Profile
