import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const LikeButton = ({ indexButton }) => {

  let cssClass = "like";

  const [likeSwitch, setLikeSwitch] = useState(false);

  const setLikeUp = (comparator) => {

    if (indexButton === comparator) {
      console.log(`indexButton = ${indexButton} comparator = ${comparator}`);
      setLikeSwitch(!likeSwitch);
      if (likeSwitch) {
        cssClass = "likeActive";
      } else{
        cssClass = "like";
      }
    } else {
      console.log("indexButton === comparator = ", indexButton === comparator);
    }
  };

  const consologga = () => console.log("consologga");

  return (
    <>
      <div
        onClick={(i) => setLikeUp(i)}
        className={`greyHover ${cssClass} rounded-2 me-2 px-4 py-3`}
      >
        <BsHandThumbsUp className="fs-4 me-2 reverseChar" />
        Like
      </div>
    </>
  );
};

export default LikeButton;

// {likeSwitch ? (
//   <div className="greyHover rounded-2 me-2 px-4 py-3">
//     <BsHandThumbsUp
//       onClick={() => setLikeUp()}
//       className="fs-4 me-2 reverseChar"
//     />
//     Like
//   </div>
// ) : (
//   <div className="greyHover rounded-2 me-2 px-4 py-3 likeOption">
//     <BsHandThumbsUp
//       onClick={() => setLikeUp()}
//       className="likeOption fs-4 me-2 reverseChar"
//     />
//     Like
//   </div>
// )}
