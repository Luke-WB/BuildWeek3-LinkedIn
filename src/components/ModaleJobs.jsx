import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  const [companyFetch, setCompanyFetch] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getCompany() {
    const urlToFetch = `https://strive-benchmark.herokuapp.com/api/jobs?company=${props.company}`;
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let { data } = await res.json();
        setCompanyFetch(data[0]);
        console.log("testJOB", data);
      } else {
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div
        className="proBlack proNormal proLight mb-2 proBlue"
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleShow();
          getCompany();
        }}
      >
        {props.title}
      </div>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{companyFetch.company_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: companyFetch.description }}></Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
