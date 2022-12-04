import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MyApartments = ({current_user, apartments}) => {

  const myApartments = apartments?.filter(apartment => current_user.id === apartment.user_id)

  return (
    <>
      <h1>My Listings</h1>
      {myApartments?.map((apartment, index) => {
        return(
            <Card key={index}>
              <CardImg top width="100%" src={apartment.image} alt="" />
              <CardBody>
                <CardTitle>${apartment.price}/month</CardTitle>
                <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
                <Button>More Details</Button>
                <Button>Edit Listing</Button>
              </CardBody>
            </Card>
        )
      })}
    </>
  )
}

export default MyApartments