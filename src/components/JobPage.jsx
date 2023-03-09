import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkFill, BsBellFill, BsFillPlayBtnFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { RiPagesLine } from "react-icons/ri";
import { SiPagekit } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import SearchJob from "./SearchJob";

function JobPage() {
  return (
    <Row>
      <Col xs={12} md={9}>
        <Row>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <BsFillBookmarkFill />
                  <span className="proGreyDark ms-2">My jobs</span>
                </Card.Text>
                <Card.Text>
                  <BsBellFill />
                  <span className="proGreyDark ms-2">Job alerts</span>
                </Card.Text>
                <Card.Text>
                  <TiTick />
                  <span className="proGreyDark ms-2">Demonstrate skills</span>
                </Card.Text>
                <Card.Text>
                  <RiPagesLine />
                  <span className="proGreyDark ms-2">Interview prep</span>
                </Card.Text>
                <Card.Text>
                  <SiPagekit />
                  <span className="proGreyDark ms-2">Resume builder</span>
                </Card.Text>
                <Card.Text>
                  <BsFillPlayBtnFill />
                  <span className="proGreyDark ms-2 ">Job seeker guidance</span>
                </Card.Text>
                <Card.Text>
                  <IoSettingsSharp />
                  <span className="proGreyDark ms-2">Application setting</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <SearchJob />
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={3}>
        <Card>
          <Card.Body>
            <Card.Text>
              <strong className="proGreyDark d-block">Open to work</strong>
              <small className="proGrey" style={{ fontSize: "65%" }}>
                Recommended based on your activity
              </small>
            </Card.Text>
            <Card.Text>
              <div style={{ background: "rgb(249, 249, 249)" }}>
                <span className="fs-5">Show recruiters you’re open to new job opportunities</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default JobPage;
