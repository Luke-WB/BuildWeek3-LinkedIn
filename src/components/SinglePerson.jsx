import { Button, Col } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function SinglePerson({ personInfo }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/user/${personInfo._id}`);
  }

  return (
    <Col style={{ borderBottom: "solid 0.5px rgba(176, 176, 176, 0.5)" }} className="mt-2 mb-0">
      <div className="d-flex mt-3">
        <img
          src={personInfo.image}
          className="rounded-circle overflow-hidden"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <Col className="m-2">
          <Link to={`/user/${personInfo._id}`}>
            <h5 className="m-0">
              {personInfo.name} {personInfo.surname}
            </h5>
          </Link>
          <p className="text-secondary m-1">{personInfo.title}</p>
          <Button className="proMore mb-3 m-0" variant="outline">
            <BsPersonPlusFill /> Connect
          </Button>
        </Col>
      </div>
    </Col>
  );
}
