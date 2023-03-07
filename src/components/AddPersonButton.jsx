import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../redux/actions";

const AddPersonButton = ({ personInfo }) => {
  const friendProfileList = useSelector((state) => state.profile.friend);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const swap = () => setToggle(true);
  useEffect(() => {
    dispatch(addFriend(personInfo));
  }, [toggle]);
  const consologga = () => console.log("friendProfileList", friendProfileList);

  return (
    <>
      <Button
        onClick={() => {
          swap();
          consologga();
        }}
        className="proMore mb-3 m-0 text-danger"
        variant="outline"
      >
        <BsPersonPlusFill /> Connect
      </Button>
    </>
  );
};

export default AddPersonButton;
