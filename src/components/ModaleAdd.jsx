import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

function ModaleAdd(props) {
  const addExperience = {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  }

  const [objExp, setObjExp] = useState(addExperience)

  const handleChange = (field, value) => {
    setObjExp((prev) => ({ ...prev, [field]: value }))
  }

  useEffect(() => {
    async function ipipipip(id, expid) {
      const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/63fe5220579c6300137cf956`
      try {
        const res = await fetch(urlToFetch, {
          method: "PUT",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objExp),
        })
        if (res.ok) {
          console.log(res)
          let profile = await res.json()
          console.log("testPUT", profile)
        } else {
        }
      } catch (error) {
        alert(error)
      }
    }
  }, [objExp])

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Text className="text-muted">* Indicates required</Form.Text>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Text className="text-muted">Title*</Form.Text>
            <Form.Control
              type="email"
              placeholder="Ex: Retails Sales Manager"
              required
              onChange={(e) => handleChange("role", e.target.value)}
            />
          </Form.Group>
          <Form.Text className="text-muted">Employment type</Form.Text>
          <Form.Select aria-label="Default select example" onChange={(e) => handleChange("contract", e.target.value)}>
            <option>Please select</option>
            <option value="1">Full-time</option>
            <option value="2">Part-time</option>
            <option value="3">Self-employed</option>
            <option value="4">Frelance</option>
            <option value="5">Contract</option>
            <option value="6">Internship</option>
            <option value="7">Apprenticeship</option>
            <option value="8">Seasonal</option>
          </Form.Select>
          <p>Learn more about employment types.</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">Company name*</Form.Text>
            <Form.Control
              type="email"
              placeholder="Ex: Microsoft"
              required
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">Location*</Form.Text>
            <Form.Control
              type="email"
              placeholder="Ex: Lonon, United Kingdom"
              required
              onChange={(e) => handleChange("area", e.target.value)}
            />
          </Form.Group>
          <Form.Text className="text-muted">Location type</Form.Text>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleChange("locationType", e.target.value)}
          >
            <option>Please select</option>
            <option value="1">One-site</option>
            <option value="2">Hybrid</option>
            <option value="3">Remote</option>
          </Form.Select>
          <Form.Text className="text-muted">Pick a location type (ex: remote)</Form.Text>
          <Form.Group className="my-4 d-flex align-items-center" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" />
            <Form.Text className="text-muted ms-3">I am currently working in this role</Form.Text>
          </Form.Group>
          <Form.Text className="text-muted">Start date*</Form.Text>
          <div className="d-flex gap-2 mb-4">
            <Form.Select aria-label="Mounth" onChange={(e) => handleChange("startDate", e.target.value)}>
              <option>Mounth</option>
              <option value="1">One-site</option>
              <option value="2">Hybrid</option>
              <option value="3">Remote</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleChange("startDate", e.target.value)}
            >
              <option>Year</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
            </Form.Select>
          </div>
          <Form.Text className="text-muted">End date*</Form.Text>
          <div className="d-flex gap-2">
            <Form.Select aria-label="Mounth" onChange={(e) => handleChange("endDate", e.target.value)}>
              <option>Mounth</option>
              <option value="1">One-site</option>
              <option value="2">Hybrid</option>
              <option value="3">Remote</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" onChange={(e) => handleChange("endDate", e.target.value)}>
              <option>Year</option>
              <option value="1">One-site</option>
              <option value="2">Hybrid</option>
              <option value="3">Remote</option>
            </Form.Select>
          </div>
          <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
            <Form.Text className="text-muted">Description</Form.Text>
            <Form.Control as="textarea" rows={3} onChange={(e) => handleChange("description", e.target.value)} />
          </Form.Group>
        </Form>
        <div>
          <h5>Skills</h5>
          <p> We recommend adding your top 5 used in this role. They’ll also appear in your Skills section.</p>
          <Button className="proModProfile" variant="outline-primary">
            + Add skill
          </Button>
        </div>
        <div>
          <h5>Media</h5>
          <p>
            Add or link to external documents, photos, sites, videos, and presentations. Learn more about{" "}
            <a href="#">media file types supported</a>
          </p>
          <Button variant="outline-primary" className="proModProfile">
            + Add media
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <Button className="proOpenTo" onClick={() => setObjExp()}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModaleAdd
