import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsHandThumbsUp, BsSkipEndFill } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import CollapseComment from "./CollapseComment";

const Bottoni = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly text-secondary">
        <div className="greyHover rounded-2 me-2 px-4 py-3">
          <BsHandThumbsUp className="fs-4 me-2" />
          Like
        </div>
        <div
          className="greyHover rounded-2 me-2 px-4 py-3"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <BiMessageRoundedDetail className="fs-4 me-2" />
          Comment
        </div>

        <div className="greyHover rounded-2 me-2 px-4 py-3">
          <MdOutlinePostAdd className="fs-4 me-2" />
          Repost
        </div>
        <div className="greyHover rounded-2 me-2 px-4 py-3">
          <BsSkipEndFill className="fs-4 me-2" />
          Send
        </div>
      </div>
      <CollapseComment open={open} singlePostId={props.singlePostId} />
    </>
  );
};
export default Bottoni;
