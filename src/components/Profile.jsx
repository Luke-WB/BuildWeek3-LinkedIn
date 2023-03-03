import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HiUsers } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { fetchIdProfile, fetchProfile, reversed, showModalExp } from "../redux/actions";
import { BiSearch, BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import ModalePut from "./ModalPut";

const Profile = () => {
  let userKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs";
  /* MODALE*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = useSelector((state) => state.profile.token);
  const myProfile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const [modified, setModified] = useState(null);
  const [fetched, setFetched] = useState(false);
  const post = useSelector((state) => state.profile.post);

  const obj = {
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  };

  function check() {
    setFetched((prevState) => !prevState);
  }

  useEffect(() => {
    async function ipipipip(id, expid) {
      const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/`;
      try {
        const res = await fetch(urlToFetch, {
          method: "PUT",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modified),
        });
        if (res.ok) {
          console.log(res);
        } else {
        }
      } catch (error) {
        alert(error);
      }
    }
    ipipipip();
  }, [modified]);

  useEffect(() => {
    dispatch(fetchProfile(userKey));
    dispatch(reversed(userKey));
  }, [fetched]);

  return (
    <>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="proImgBarSetting">
          <Link to={"/"}>
            <img
              className="proImgBarSetting"
              style={{ objectFit: "cover", objectPosition: "top" }}
              src={"https://www.media.inaf.it/wp-content/uploads/2020/03/meteorite-1280x720.jpg"}
              alt="immagine background"
            />
          </Link>
        </div>
        <Link to={"/"}>
          <img className="rounded-circle position-absolute proAbsolute" src={myProfile.image} alt="immagine profilo" />
        </Link>
        <div className="mt-5 mx-4">
          <div className="matita position-absolute" onClick={handleShow}>
            <BiPencil />
          </div>

          <h2 className="mt-2 mb-0">
            {myProfile.name} {myProfile.surname}
          </h2>
          <div className="proBlack proMedium proLight">{myProfile.title}</div>
          <Link to={"/"}>
            <div className="proGrey proLight proGreyHBlue mt-2">{myProfile.email}</div>
          </Link>
          <div className="mt-2">
            <Link to={"/"}>
              <span className="proGrey proLight proGreyHBlue">{myProfile.area}</span>
            </Link>

            <Link to={"/"}>
              <span className="proBlue">Contact info</span>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="proBlue mt-2 mb-3">{Math.floor(Math.random() * 100)} connection</div>
          </Link>
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
          <Modal show={show} onHide={handleClose} style={{ height: "50%", position: "fixed", top: "30px" }}>
            <Modal.Header closeButton>
              <Modal.Title className="fw-normal fs-5">Modifica introduzione</Modal.Title>
            </Modal.Header>
            <p className="text-secondary fw-light ms-3" style={{ fontSize: "12px" }}>
              * Indica che il campo è obbligatorio
            </p>
            <Modal.Body style={{ overflowY: "scroll" }}>
              <Form className="text-secondary">
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Nome*</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.name}
                    onChange={(e) => (obj.name = e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Cognome*</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.surname}
                    onChange={(e) => (obj.surname = e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Nome aggiuntivo</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <p style={{ fontSize: "14px" }}> Pronuncia del nome</p>
                <p style={{ fontSize: "14px", color: "#535454" }}>
                  <BsFillInfoSquareFill /> Può essere aggiunta solo usando la nostra app per dispositivi mobili
                </p>
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
                <h5> Posizione attuale</h5>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Posizione lavorativa*</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.title}
                    onChange={(e) => (obj.title = e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex">
                  <Form.Check aria-label="option 1" />
                  <p>Mostra l'azienda attuale nella mia presentazione</p>
                </div>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Settore*</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.area}
                    onChange={(e) => (obj.area = e.target.value)}
                  />
                  <p> Scopri di più sulle opzioni relative al settore</p>
                </Form.Group>
                <h5> Formazione</h5>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Formazione*</Form.Label>
                  <Form.Control type="text" defaultValue={myProfile.bio} onChange={(e) => (obj.bio = e.target.value)} />
                </Form.Group>
                <div className="d-flex">
                  <Form.Check aria-label="option 1" />
                  <p>Mostra l'azienda attuale nella mia presentazione</p>
                </div>
                <h5> Località</h5>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Paese/Area geografica*</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.area}
                    onChange={(e) => (obj.area = e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 text-secondary" style={{ fontSize: "14px" }}>
                  <Form.Label className="mb-1">Città</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={myProfile.area}
                    onChange={(e) => (obj.area = e.target.value)}
                  />
                </Form.Group>
                <h5 className="mt-4"> Informazioni di contatto</h5>
                <p style={{ fontSize: "14px" }}> Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>

                <p className="text-primary fw-bold mt-4 mb-5">Modifica le informazioni di contatto </p>
                <h5> Sito Web</h5>
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
                CHIUDI
              </Button>
              <Button
                variant="primary"
                className="rounded-5"
                onMouseDown={() => {
                  check();
                  setModified(obj);
                  fetchProfile(token);
                }}
              >
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
              <Link to={"/"}>
                <HiUsers className="proGrey proIcon me-2" />
              </Link>
              <div>
                <Link to={"/"}>
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} profile views </span>
                </Link>
                <br />
                <span className="proGrey proLight proSmall">Discover who's viewed your profile.</span>
              </div>
            </div>
            <div className="proGrey proNormal me-5 d-flex">
              <Link to={"/"}>
                <BiSearch className="proGrey proIcon me-2" />
              </Link>
              <div>
                <Link to={"/"}>
                  <span className="proGrey proGreyHBlue">{Math.floor(Math.random() * 100)} search appearance</span>
                </Link>
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
          <div>
            <h2 className="my-0">Activity</h2>
            <Link to={"/"}>
              <div className="proBlue my-0">{Math.floor(Math.random() * 100)} connection</div>
            </Link>
          </div>
          <div className="proBlack prosmall proLight mt-2">
            {post &&
              post.slice(0, 50).map((singPost, i) => {
                return (
                  <>
                    {singPost.user._id === `${myProfile._id}` ? (
                      <>
                        <div
                          key={i}
                          className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
                        >
                          <div className="my-2">
                            <h3 className="proBlack my-2 mx-4">
                              writted by{" "}
                              <Link to={`/user/${singPost.user?._id}`}>
                                <span className="proBlack proGreyHBlue">{singPost.user?.name}</span>
                              </Link>
                            </h3>
                            <div className="my-2 me-5 mx-4">
                              <span className="proGrey proBlack proLight proSmall proNormal">{singPost.text}</span>
                              <img className="my-3 ms-4 me-3 rounded-2 w-100" src={singPost.image} alt="postedImg" />
                            </div>
                          </div>
                        </div>
                        <div className="proSmall proLight mx-4">edited: {singPost.updatedAt.slice(0, 10)}</div>

                        <ModalePut
                          check={check}
                          id={singPost._id}
                          // ternaryCheck={true} <--- perchè non funzion :(
                        />
                        {console.log("eccolo id POST", singPost._id)}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
          </div>
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
          <Experience myProfile={myProfile} />
        </div>
      </div>
    </>
  );
};

export default Profile;
