import { FiBookmark } from "react-icons/fi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addPrefeJobs, removePrefeJobs } from "../redux/actions";

function SingleJob(props) {
  const prefe = useSelector((state) => state.profile.prefe);
  const prefeJob = prefe?.map((el) => el._id);
  const dispatch = useDispatch();

  return (
    <>
      {!prefeJob?.includes(props.job._id) ? (
        <span
          className="greyHover proIcon"
          style={{ borderRadius: "50%", padding: "5px 10px" }}
        >
          <FiBookmark
            onClick={() => {
              dispatch(addPrefeJobs(props.job));
            }}
          />
        </span>
      ) : (
        <span
          className="greyHover proIcon"
          style={{ borderRadius: "50%", padding: "0px, 150px" }}
        >
          <BsFillBookmarkCheckFill
            onClick={() => {
              dispatch(removePrefeJobs(props.job));
            }}
          />
        </span>
      )}
    </>
  );
}

export default SingleJob;
