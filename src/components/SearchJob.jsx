import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiBookmark } from "react-icons/fi";

function SearchJob() {
  const [jobs, setJobs] = useState("developer");
  const [jobsFetch, setJobFetch] = useState([]);
  const [titlePage, setTitlePage] = useState("Developer");
  function capitalizeFirstLetter(string) {
    setTitlePage(string.charAt(0).toUpperCase() + string.slice(1));
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

  useEffect(() => {
    getJobs("developer");
  }, []);

  /*   https://strive-benchmark.herokuapp.com/api/jobs?company=Olla //FETCH IN BASE AL NOME DELL AZIENDA
https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10 //FETCH PER CATEGORIA */

  return (
    <>
      <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} />
        <Button
          variant="primary"
          className="proOpenTo"
          onClick={() => {
            getJobs(jobs);
            capitalizeFirstLetter(jobs);
          }}
        >
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-between bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="mb-3">{titlePage}</h2>
          {jobsFetch.slice(0, 5).map((job) => {
            return (
              <div key={job._id}>
                <div className="d-flex justify-content-between align-items-center m-0 p-0">
                  <div className="proBlack proNormal proLight mb-2 proBlue">{job.title}</div>
                  <FiBookmark style={{ fontSize: "25px" }} />
                </div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">{job.category}</div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">{job.company_name}</div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">
                  {job.publication_date.slice(0, 10)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchJob;
