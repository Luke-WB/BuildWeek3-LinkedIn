import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiBookmark } from "react-icons/fi";

function SearchJob() {
  const [jobs, setJobs] = useState([]);
  const [jobsFetch, setJobFetch] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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

  /*   https://strive-benchmark.herokuapp.com/api/jobs?company=Olla //FETCH IN BASE AL NOME DELL AZIENDA
https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10 //FETCH PER CATEGORIA */

  return (
    <>
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} />
        <Button variant="outline-success" onClick={() => getJobs(jobs)}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="my-0">{capitalizeFirstLetter("Prova")}</h2>
          {jobsFetch.slice(0, 5).map((job) => {
            return (
              <div className="d-flex justify-content-between w-100">
                <div key={job._id}>
                  <div className="proBlack proNormal proLight mt-2 proBlue">{job.title}</div>
                  <div className="proBlack proSmall proLight mt-2 proGrey proGreyHBlue">{job.category}</div>
                  <div className="proBlack proSmall proLight mt-2 proGrey proGreyHBlue">{job.company_name}</div>
                </div>
                <FiBookmark />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchJob;
