import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const LikeButton = ({ indexButton }) => {
  let cssClass = "greyHover rounded-2 me-2 px-4 py-3";
  const [likeSwitch, setLikeSwitch] = useState(true);

  if (likeSwitch) {
    cssClass+= " likeActive";
  }

  const handleClick = () => {
    setLikeSwitch(!likeSwitch)
  }

  return (    
      <div onClick={() => setLikeSwitch(!likeSwitch)} className={cssClass}>
        <BsHandThumbsUp className="fs-4 me-2 reverseChar" />
        Like
      </div>    
  );
};

export default LikeButton;