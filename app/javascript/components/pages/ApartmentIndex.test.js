import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
  })

  test("renders without crashing", () => {
    const element = screen.getByText("Recent Listings")
    expect(element).toBeInTheDocument()
  })
  
  test("renders apartment cards", () => {
    mockApartments.forEach(apartment => {
      const apartmentStreet = screen.getByText(`${apartment.street}, ${apartment.city}, ${apartment.state}`)
      expect(apartmentStreet).toBeInTheDocument()
    })

    const apartmentImage = screen.getAllByRole("img")
    expect(apartmentImage[0]).toBeVisible()
  })
})