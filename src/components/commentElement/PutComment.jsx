const PutComment = ({ id, getComment, idComment }) => {
  const commetModified = {
    comment: "adesso inizia il meme time",
    rate: 2,
    elementId: String(id),
  };

  const putFetchComment = async () => {
    const urlToFetch = `https://striveschool-api.herokuapp.com/api/comments/${idComment}`;
    try {
      const res = await fetch(urlToFetch, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commetModified),
      });
      console.log(
        `cosa sto mandando ${commetModified} stringifato ${JSON.stringify(
          commetModified
        )}, id: ${id}`
      );
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
    <>
      <div
        className="text-primary"
        onClick={() => {
          putFetchComment();
          getComment();
        }}
      >
        MODIFICA
      </div>
    </>
  );
};
export default PutComment;
