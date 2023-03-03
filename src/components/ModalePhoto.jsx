import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalePhoto = ({ showPhoto, handleClosePhoto }) => {
  const activator = "";
  let enabled = activator === "active";

  const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/6400de50035832001350be55",
      {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
          //NON serve ContentType :)
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
        },
      }
    );
  };

  const handleFile = (ev, type) => {
    setFd((prev) => {
      console.log(ev.target.files[0]);
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete(type); //ricordatevi di svuotare il FormData prima :)
      prev.append(type, ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      console.log(prev);
      activator = "active";
      return prev;
    });
  };

  return (
    <>
      {/* <input
        className="d-none fs-4 text-primary me-2"
        type="file"
        //   onChange={(ev) => handleFile(ev, "post")}
        accept=".jpg"
      />
      <button></button> */}

      <Modal show={showPhoto} onHide={handleClosePhoto}>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor modalTitle">
            Edit your photo
          </Modal.Title>
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
            onChange={(ev) => handleFile(ev, "post")}
          />
          <Form.Group className="d-flex justify-content-between align-items-center modalIcon">
            <div className="mt-3">
              <Button
                className="proOpenTo modalButtonGrey ms-2"
                variant="outline-primary"
                onClick={() => {
                    handleClosePhoto();
                  }}
              >
                Cancel
              </Button>
              <Button
                className="proOpenTo modalButtonGrey ms-2"
                variant="primary"
                disabled={!enabled}
                onClick={() => {
                  handleClosePhoto();
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
};

export default ModalePhoto;
