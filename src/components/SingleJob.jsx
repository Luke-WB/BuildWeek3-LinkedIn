import { FiBookmark } from "react-icons/fi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addPrefeJobs, removePrefeJobs } from "../redux/actions";

function SingleJob(props) {
  const prefe = useSelector((state) => state.profile.prefe);
  const prefeJob = prefe.map((el) => el._id);
  const dispatch = useDispatch();

  return (
    <>
      {!prefeJob.includes(props.job._id) ? (
        <FiBookmark
          style={{ fontSize: "25px" }}
          onClick={() => {
            dispatch(addPrefeJobs(props.job));
          }}
        />
      ) : (
        <BsFillBookmarkCheckFill
          style={{ fontSize: "25px" }}
          onClick={() => {
            dispatch(removePrefeJobs(props.job));
          }}
        />
      )}
    </>
  );
}

export default SingleJob;
