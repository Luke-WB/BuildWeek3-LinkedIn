import { useState } from "react";
import { fakeFetchJob } from "../../redux/actions/fintafetch";
import { FiBookmark } from "react-icons/fi";

const SearchBjJoy = () => {
  const [jobFetch, setJobFetch] = useState([]);
  const fintafunzione = () => setJobFetch(fakeFetchJob);
  const query = "lavoro ricercato";
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div
        onClick={fintafunzione}
        className="d-flex flex-column align-items-start bg-light rounded-3 position-relative proCard my-4"
      >
        <div className="my-4 mx-4">
          <h2 className="my-0">{capitalizeFirstLetter(query)}</h2>
          {jobFetch.slice(0, 5).map((job) => {
            return (
                <div className="d-flex justify-content-between w-100">
                  <div key={job._id}>
                    <div className="proBlack proNormal proLight mt-2 proBlue">
                      {job.title}
                    </div>
                    <div className="proBlack proSmall proLight mt-2 proGrey proGreyHBlue">
                      {job.category}
                    </div>
                    <div className="proBlack proSmall proLight mt-2 proGrey proGreyHBlue">
                      {job.company_name}
                    </div>
                  </div>
                  <FiBookmark />
                </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SearchBjJoy;
