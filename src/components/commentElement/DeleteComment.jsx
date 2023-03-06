const DeleteComment = ({ id, getComment,idComment }) => {
    const DeleteFetchComment = async () => {
      const urlToFetch = `https://striveschool-api.herokuapp.com/api/comments/${idComment}`;
      try {
        const res = await fetch(urlToFetch, {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o"}});        
        if (res.ok) {
          let comment = await res.json();
  
          console.log("PUT", comment);
        } else {
          console.log("error:", res.status);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    return (
      <div
        className="text-danger"
        onClick={() => {
          DeleteFetchComment();
          getComment();
        }}
      >
        CANCELLA
      </div>
    );
  };
  export default DeleteComment;