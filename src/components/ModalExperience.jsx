import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { showModalExp } from "../redux/actions";
import { useDispatch } from "react-redux";

function ModalEsperience() {
  const handleClose = () => toggleModal(showExp);
  const handleShow = () => toggleModal(showExp);

  const showExp = useSelector((state) => state.profile.showExp);
  const dispatch = useDispatch();

  const toggleModal = (param) => {
    dispatch(showModalExp(param));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={showExp} onHide={handleClose}>
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
    </>
  );
}

export default ModalEsperience;
