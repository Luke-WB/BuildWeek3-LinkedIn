import { Button, Col} from "react-bootstrap"
import { BsPersonPlusFill } from "react-icons/bs";

export default function SinglePerson({personInfo}) {
  return (
    <Col style={{borderBottom: "solid 1px rgba(176, 176, 176, 0.5)"}} className="my-2">
        <div className="d-flex mt-3">
          <img
            src={personInfo.image}
            className="rounded-circle overflow-hidden"
            style={{ width:"50px", height:"50px", marginRight: "10px"}}
          />
          <Col className="m-2" >
            <a>
              <h5 className="m-0">
                {personInfo.name} {personInfo.surname}
              </h5>
            </a>
            <p className="text-secondary m-1">{personInfo.title}</p>
        <Button className="proMore mb-3 m-0"><BsPersonPlusFill/> Connect</Button>
          </Col>
        </div>
    </Col>
  );
}
