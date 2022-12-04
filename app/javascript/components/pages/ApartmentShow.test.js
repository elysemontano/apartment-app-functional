import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockApartments from "../mockApartments"
import ApartmentShow from "./ApartmentShow"

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    const logged_in = true

    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={ mockApartments } logged_in={logged_in} />} />
        </Routes>
      </MemoryRouter>
    )
  })
  it("renders without crashing", () => {
    // const element = screen.getByText("Contact Us!")
    // expect(element).toBeInTheDocument()
    // expect(screen.getAllByRole("button").length).toBe(2)
  })
})