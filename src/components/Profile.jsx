import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";

const Profile = ({ name, ...props }) => {
  /* MODALE*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = useSelector((state) => state.profile.token);
  const myProfile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(token));
  }, []);
  console.log(myProfile);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "400px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div style={{ height: "150px", width: "100%" }}>
          <img
            style={{ width: "100%", height: "150px", objectFit: "cover", objectPosition: "top" }}
            src={myProfile.image}
            alt="immagine background"
          />
        </div>
        <img
          className="rounded-circle position-absolute "
          style={{
            width: 100,
            top: "100px",
            left: "25px",
            border: "solid 5px white",
          }}
          src={myProfile.image}
          alt="immagine profilo"
        />
        <div className="mt-5 mx-4">
          <h1 className="mt-2">
            {myProfile.name} {myProfile.surname}
          </h1>
          <p>{myProfile.title}</p>
          <p className="text-secondary" onClick={handleShow}>
            {myProfile.email}
          </p>
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

      {/*FINE MODALE*/}
      <div
        style={{
          overflow: "hidden",
          height: "150px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div className="mt-5 mx-4">
          <h1 className="mt-2">Analitics</h1>
          <p className="text-secondary">private to you</p>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div className="mt-5 mx-4">
          <h1 className="mt-2">About</h1>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "150px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div className="mt-5 mx-4">
          <h1 className="mt-2">Activity</h1>
          <p className="text-secondary">cose a caso</p>
        </div>
      </div>

      {/* <div>Experience</div> <-------- da fare domani */}
      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div className="mt-5 mx-4">
          <h1 className="mt-2">interest</h1>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
          height: "250px",
          border: "solid 1px grey",
        }}
        className="d-flex flex-column align-items-start bg-light rounded-4 my-4 position-relative">
        <div className="mt-5 mx-4">
          <h1 className="mt-2">Education</h1>
          <p className="text-secondary">{myProfile.bio}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
