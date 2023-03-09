import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function SearchJob() {
  const [jobs, setJobs] = useState([]);
  const [jobsFetch, setJobFetch] = useState([]);

  async function getJobs(query) {
    const urlToFetch = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`;
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let { data } = await res.json();
        setJobFetch(data);
        console.log("testJOB", data);
      } else {
      }
    } catch (error) {
      alert(error);
    }
  }
  const handleChange = (e) => {
    setJobs(e.target.value);
  };
  return (
    <>
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} />
        <Button variant="outline-success" onClick={() => getJobs(jobs)}>
          Search
        </Button>
      </Form>
      <div>{jobsFetch.map((el) => el.title)}</div>
    </>
  );
}

export default SearchJob;
