import FormAddComment from "./FormAddComment";

const Comment = ({ id }) => {
  const commentPrototype = {
    comment: "commento test",
    rate: 2,
    elementId: String(id),
  };
  const comment = null;
  const postComment = async () => {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/comments/`;
    try {
      const res = await fetch(urlToFetch, {
        method: "POST",
        headers: {
          'Authorization':
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentPrototype),
      });
      console.log(`cosa sto mandando ${commentPrototype} stringifato ${JSON.stringify(commentPrototype)}, id: ${id}`);
      if (res.ok) {
        comment = await res.json();
        return comment;
        // console.log("PUT", modifica);
      } else {
        console.log("error:", res.status);
      }
    } catch (error) {
      alert("error", error);
    }
  };
  return (
  <>
  <div onClick={postComment} className={"text-warning"}>{comment} commento</div>;
  <FormAddComment />
  </>
  )
};

export default Comment;
