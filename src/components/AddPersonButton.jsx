import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { BsPersonPlusFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { addFriend } from "../redux/actions"

const AddPersonButton = ({ personInfo }) => {
  const friendProfileList = useSelector((state) => state.profile.friend)
  const dispatch = useDispatch()
  const friend = useSelector((state) => state.profile.friend)
  const consollogga = () => {
    console.log("friend: ", friend)
  }
  let cssClass = "proMore mb-3 m-0 text-danger"
  const [likeSwitch, setLikeSwitch] = useState(true)

  for (let i = 0; i < friend.length; i++) {
    if (personInfo._id.includes(friend[i])) {
      cssClass = "proOpenTo"
    } else {
      cssClass = " mb-3 m-0 text-danger "
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          dispatch(addFriend(personInfo._id))
          consollogga()
        }}
        className={cssClass}
        variant="outline"
      >
        <BsPersonPlusFill /> Connect
      </Button>
    </>
  )
}

export default AddPersonButton
