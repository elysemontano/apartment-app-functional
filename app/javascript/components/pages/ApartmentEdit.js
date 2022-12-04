import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom"

const ApartmentEdit = ({ current_user, apartments, editApartment }) => {
  const navigate = useNavigate()
  let {id} = useParams()
  const apartment = apartments?.find((apartment) => apartment.id === +id)
  const [updatedApartment, setUpdatedApartment] = useState({
    street: apartment.street,
    city: apartment.city,
    state: apartment.state,
    price: apartment.price,
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    pets: apartment.pets,
    image: apartment.image,
    manager: apartment.manager,
    email: apartment.email,
    user_id: current_user.id
  })

  const handleChange = (e) => {
    setUpdatedApartment({ ...updatedApartment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    editApartment(updatedApartment, apartment.id)
    navigate("/myapartments")
  }

  return (
    <>
      <h1>New Listing</h1>
      <Form>
       <FormGroup>
          <Label for="street">Street</Label>
          <Input type="text" name="street" onChange={handleChange} value={updatedApartment.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" onChange={handleChange} value={updatedApartment.city} />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" onChange={handleChange} value={updatedApartment.state} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price per month</Label>
          <Input type="text" name="price" onChange={handleChange} value={updatedApartment.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input type="number" name="bedrooms" onChange={handleChange} value={updatedApartment.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input type="number" name="bathrooms" onChange={handleChange} value={updatedApartment.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="petss">Pets</Label>
          <Input type="text" name="pets" onChange={handleChange} value={updatedApartment.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={updatedApartment.image} />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input type="text" name="manager" onChange={handleChange} value={updatedApartment.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" onChange={handleChange} value={updatedApartment.email} />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentEdit