import Modal from "react-bootstrap/Modal";
import "./VideoModal.css";

function VideoModal({ show, handleClose }) {
  return (
    <Modal show={show} size="lg" onHide={handleClose} centered>
      <Modal.Body>
        <iframe
          height={"500"}
          src="https://www.youtube.com/embed/Vb4O04ZTt4Y"
          allowFullScreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

export default VideoModal;
