import { Button } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../redux/actions";

const AddPersonButton = ({ personInfo }) => {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.profile.friend);
  const consollogga = () => {
    console.log("friend: ", friend);
  };
  return (
    <>
      <Button
        onClick={() => {
          dispatch(addFriend(personInfo));
          consollogga();
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
