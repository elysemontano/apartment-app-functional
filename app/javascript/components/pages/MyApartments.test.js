import React from "react"
import { render, screen } from "@testing-library/react"
import MyApartments from "./MyApartments"
import { BrowserRouter, useParams } from "react-router-dom"
import mockApartments from "../mockApartments"

describe("<MyApartments />", () => {
    beforeEach(() => {
        const current_user = {
            email: "test@test.com",
            password: "testing123",
            id: 1
        }
        const userApartments = [
            {
                street: "ABC Sesame Street",
                city: "Sesame",
                state: "Isle",
                manager: "Cookie Monster",
                email: "monstermanager@cookies.com",
                price: 15000,
                bedrooms: 1,
                bathrooms: 1,
                pets: "puppets only",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sesame_Street_buildings_%28193090534%29.jpg"
            }
        ]
        render(
            <BrowserRouter>
                <MyApartments current_user={current_user} myApartments={userApartments}/>
            </BrowserRouter>
        )
    })

    it("renders without crashing", () => {
        const element = screen.getByText("My Listings")
        expect(element).toBeInTheDocument()
    })
})