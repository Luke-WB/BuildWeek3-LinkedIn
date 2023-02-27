import { Col, Row } from "react-bootstrap"

export default function SinglePerson({personInfo}) {
  return (
    <div className="d-flex align-items-center">
      <img
        src={personInfo.image}
        className="rounded-circle overflow-hidden my-3"
        style={{ width: "75px" }}
      />
      <Col className="mx-4">
        <a>
          <h5>
            {personInfo.name} {personInfo.surname}
          </h5>
        </a>
        <p>{personInfo.title}</p>
      </Col>
    </div>
  );
}
