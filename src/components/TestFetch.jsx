import { useEffect } from "react"

const experiences = {
    role: "CTO",
    company: "Umbrella Corp",
    startDate: "1700-06-16",
    endDate: null,								
    description: "TOP secret",
    area: "Berlin",
}

export default function postExperiences() {
    async function dadadada(id){
        const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
        try {
          const res = await fetch(urlToFetch, {
            method: "POST",
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(experiences)
          })
          if (res.ok) {
            console.log(res);
            let profile = await res.json()
            console.log("testProfilo", profile)
          } else {
          }
        } catch (error) {
          alert(error)

        }
    }
    dadadada(`63fc6fa3f193e60013807f59`)

    const experiences2 = {
            name: "ManoloZ",
            surname: "Vallerga",
            email: "antoniovallerga85@gmail.com",
            bio: "Laureato in Biotecnologie Medico Farmaceutiche nel 2013. Più di 10 anni di esperienza di lavoro a contatto con il pubblico.Appassionato di tecnologia, storia, scienza.",
            title: "Fullstack Developer",
            area: "Genova",
    }
    async function ipipipip(id, expid){

        const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/`
        try {
          const res = await fetch(urlToFetch, {
            method: "PUT",
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(experiences2)
          })
          if (res.ok) {
            console.log(res);
            let profile = await res.json()
            console.log("testPUT", profile)
          } else {
          }
        } catch (error) {
          alert(error)

        }
    }

    ipipipip()
}