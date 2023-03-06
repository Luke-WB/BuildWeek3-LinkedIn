import { useState } from "react";
import DeleteComment from "./DeleteComment";
import PutComment from "./PutComment";

const ReadComment = ({ id }) => {
  const [commentiricevuti, setCommentiricevuti] = useState([])
  const getComment = async () => {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/comments/${id}`;
    try {
      const res = await fetch(urlToFetch, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      console.log(`questo è il commento:${res}, del post con id:${id}`);

      if (res.ok) {
        let data = await res.json();
        setCommentiricevuti(data)
        console.log(
          `res è: ${res}questo è il commento:${commentiricevuti}, del post con id:${id}`
        );
      } else {
        console.log("error:", res.status);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  
  return (
    <>
      <div onClick={getComment} className="text-success">ciaone</div>
      {commentiricevuti &&
        commentiricevuti.map((arr, k) => {
          return (
            <div>
              <span key={k}>{arr.comment}</span>
              <PutComment id={id} idComment={arr._id} getComment={getComment} />
              <DeleteComment id={id} idComment={arr._id} getComment={getComment} />            
            </div>
          );
        })}
    </>
  );
};

export default ReadComment;
