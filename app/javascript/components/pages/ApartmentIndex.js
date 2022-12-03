import React from "react"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <h3>Recent Listings</h3>
      {apartments?.map((apartment, index) => {
        return(
            <Card key={index}>
              <CardImg top width="100%" src={apartment.image} alt="" />
              <CardBody>
                <CardTitle>${apartment.price}/month</CardTitle>
                <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
                <Button>More Details</Button>
              </CardBody>
            </Card>
        )
      })}
    </>
  )
}

export default ApartmentIndex