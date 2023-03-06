//Component.jsx

import { useState } from "react"

 //ChangeEvent e FormEvent sono i tipi degli eventi onChange e onSubmit
 export default function AddObj({ idAdd }) {
  const [fd, setFd] = useState(new FormData()) //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idAdd}/picture`,
      {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
            //NON serve ContentType :)
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
        },
      }
    )
  }
  const handleFile = (ev) => {
    setFd((prev) => {
    //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("profile") //ricordatevi di svuotare il FormData prima :)
      prev.append("profile", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFile} />
        <button>SEND</button>
      </form>
    </>
  )
}