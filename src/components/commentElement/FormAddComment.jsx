import { useState } from "react";

const FormAddComment = ({getComment}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <textarea value={message} onChange={handleChange} />
      </label>
      <button onClick={getComment} type="submit">Submit</button>
    </form>
  );
};

export default FormAddComment;
