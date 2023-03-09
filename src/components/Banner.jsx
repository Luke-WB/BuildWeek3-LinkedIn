import { Col, Row } from "react-bootstrap";
import { BsTranslate } from "react-icons/bs";

const Banner = ({ handleShow }) => {
  return (
    <div
      className="proImgBarSetting"
      style={{
        objectFit: "cover",
        objectPosition: "top",
        overflow:"hidden",
      }}
      alt="immagine background"
      onClick={handleShow}
    >
      <div
        className="d-inline-block p-0 m-0"
        style={{ width: "33%", height: "100%", background: "#A0B4B7" }}
      ></div>
      <div
        className="d-inline-block p-0 m-0 position-relative"
        style={{
          width: "37%",
          height: "100%",
          background: "#D9E5E7",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            aspectRatio:"1/1",
            position: "absolute",
            left: "0",
            background: "#A0B4B7",
            borderRadius: "50%",
            overflow:"hidden",
            transformOrigin: "left",
            transform: "translateX(-50%) scale(2)",
          }}
        ></div>
      </div>
      <div
        className="d-inline-block p-0 m-0"
        style={{ width: "30%", height: "100%", background: "#BFD3D6" }}
      ></div>
    </div>
  );
};

export default Banner;
