import { Button } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, removeFriend } from "../redux/actions";

const AddPersonButton = ({ personInfo, keyuser }) => {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.profile.friend);
  const consollogga = () => {
    console.log("friend: ", friend);
  };

  return (
    <>
      {friend.includes(personInfo._id) ? (
        <Button
          onClick={() => {
            dispatch(removeFriend(personInfo._id));
            consollogga();
          }}
          className="text-success"
          variant="outline"
        >
          <BsPersonPlusFill /> Connect
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(addFriend(personInfo._id));
            consollogga();
          }}
          className="text-danger"
          variant="outline"
        >
          <BsPersonPlusFill /> Disconnect
        </Button>
      )}
    </>
  );
};

export default AddPersonButton;
