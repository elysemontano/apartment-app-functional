import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import NotFound from "./NotFound"
import MyApartments from "./MyApartments"

describe("<MyApartments />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyApartments />, div)
  })
})