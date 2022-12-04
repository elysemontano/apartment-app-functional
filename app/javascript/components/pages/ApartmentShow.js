import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = (props) => {

  let {id} = useParams()
  const currentApartment = props.apartments.find((apartment) => apartment.id === +id)

  return (
    <>
      {currentApartment &&      
        <Card>
          <CardImg top width="100%" src={currentApartment.image} alt="" />
          <CardBody>
            <CardTitle>${currentApartment.price}/month</CardTitle>
            <CardSubtitle>{currentApartment.street}, {currentApartment.city}, {currentApartment.state}</CardSubtitle>
            <CardSubtitle>{currentApartment.bedrooms} Bedroom {currentApartment.bathrooms}, Bath</CardSubtitle>
            <CardSubtitle>Pets: {currentApartment.pets}</CardSubtitle>
            <CardSubtitle>Contact Us!</CardSubtitle>
            <CardSubtitle>Manager: {currentApartment.manager}</CardSubtitle>
            <CardSubtitle>Email: {currentApartment.email}</CardSubtitle>
            
            {props.logged_in &&
              <>            
                <Button>Edit Listing</Button>
                <Button>Delete Listing</Button>
              </>
            }
          </CardBody>
        </Card>
      }
    </>
  )
}

export default ApartmentShow