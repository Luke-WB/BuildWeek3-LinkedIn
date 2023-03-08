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
          className="text-success buttonPeople"
          variant="outline"
        >
          <span>
            <BsPersonPlusFill className="me-1" />
            Following
          </span>
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
          <BsPersonPlusFill /> Follow
        </Button>
      )}
    </>
  );
};

export default AddPersonButton;
