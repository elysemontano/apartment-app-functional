import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const ApartmentNew = (props) => {
  const navigate = useNavigate()
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    manager: "",
    email: "",
    user_id: props.current_user.id
  })

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    props.createApartment(newApartment)
    navigate("/myapartments")
  }

  return (
    <>
      <h1>New Listing</h1>
      <Form>
       <FormGroup>
          <Label for="street">Street</Label>
          <Input type="text" name="street" onChange={handleChange} value={newApartment.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" onChange={handleChange} value={newApartment.city} />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" onChange={handleChange} value={newApartment.state} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price per month</Label>
          <Input type="text" name="price" onChange={handleChange} value={newApartment.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input type="number" name="bedrooms" onChange={handleChange} value={newApartment.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input type="number" name="bathrooms" onChange={handleChange} value={newApartment.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="petss">Pets</Label>
          <Input type="text" name="pets" onChange={handleChange} value={newApartment.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={newApartment.image} />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input type="text" name="manager" onChange={handleChange} value={newApartment.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" onChange={handleChange} value={newApartment.email} />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentNew