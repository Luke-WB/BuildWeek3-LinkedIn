import { useEffect, useState } from "react"

export default function Comments({ singlePostId }) {
    const [commentsArray, setCommentArray] = useState([])
    const [rendered, setRendered] = useState(false);
    const [input, setInput] = useState(null)
    const [putInput, setPutInput] = useState(null)

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e);
    };
    const handlePutChange = (e) => {
        setPutInput(e.target.value);
        console.log(e);
    };

    let body = {
        comment: input,
        rate: "3",
        elementId: singlePostId
    }



    function check() {
        setRendered((prevState) => !prevState);
      }

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singlePostId}`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o"
                }
            })
            if (response.ok) {
                let postComment = await response.json()
                console.log("response comment", postComment); 
                setCommentArray(postComment)
            }
            
        } catch (error) {
            alert("comment", error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [rendered])

    async function deleteComment(id) {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o"
                }
            })
            if (response.ok) {
            }
        } catch (error) {
            alert("comment", error)
        }
    }

    const fetchPostComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
              method: "POST",
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
                'Content-Type': 'application/json',  
              },
              body: JSON.stringify(body),
            })
            if (response.ok) {
                console.log("testComment", response); 
            }
            
        } catch (error) {
            alert("testComment", error)
        }
    }

    let putCommentsObj = {
        comment: putInput,
    }

    const putComments = async (id) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
              method: "PUT",
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
                'Content-Type': 'application/json',  
              },
              body: JSON.stringify(putCommentsObj),
            })
            if (response.ok) {
                console.log("testComment", response); 
            }
            
        } catch (error) {
            alert("testComment", error)
        }
    }

    console.log("commentsArray", commentsArray);
    return <>
    {commentsArray.map((el, i) => 
    <>
        <form onSubmit={(e) => {e.preventDefault(); fetchPostComments()}}>
        <label for="fname">POST:</label>
            <input type="text" onChange={handleChange}/>
        </form>
        <div><h3 key={i}>{el.comment}</h3>  
        <label for="fname">PUT:</label>      
            <form onSubmit={(e) => {
                e.preventDefault();
                 putComments(el._id)
                 }}>
                <input type="text" onChange={handlePutChange}/>
            </form>
        </div>
        <button onClick={() => {
            deleteComment(el._id);
             check()
        }}>X</button>
    </>

    )}
    </>

}