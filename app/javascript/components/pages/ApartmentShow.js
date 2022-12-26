import React from "react"
import { useParams, NavLink } from "react-router-dom"
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
                <Button>
                  <NavLink to={`/apartmentedit/${currentApartment.id}`} className="nav-link">
                    Edit Listing
                  </NavLink>
                </Button>
                <Button onClick={() => props.deleteApartment(currentApartment.id)}>
                  <NavLink to={`/myapartments`} className="nav-link">Delete Listing</NavLink>
                </Button>
              </>
            }
          </CardBody>
        </Card>
      }
    </>
  )
}

export default ApartmentShow