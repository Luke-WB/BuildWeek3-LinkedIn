import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalePhoto = ({ showPhoto, handleClosePhoto, handleFile }) => {
  return (
    <>
      <Modal show={showPhoto} onHide={handleClosePhoto}>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor modalTitle">
            Add your photo
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
            onChange={handleFile}
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
