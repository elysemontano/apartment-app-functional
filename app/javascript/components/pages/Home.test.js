import React from "react"
import { render,screen } from "@testing-library/react"
import Home from "./Home"
import userEvent from "@testing-library/user-event"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })

  // Add more tests if image is added
})