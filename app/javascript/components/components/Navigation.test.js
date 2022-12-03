import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links for a registered user", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true}/>
      </BrowserRouter>
    )
    await userEvent.click(screen.getByRole("link", {
      name: /home/i
    }))
    expect(screen.getByText("View Listings")).toBeInTheDocument()
    expect(screen.getByText("Sign Out")).toBeInTheDocument()
    expect(screen.getByText("My Listings")).toBeInTheDocument()
    expect(screen.getByText("Create Listing")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })

  it("has clickable links for a unregistered user", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={false} />
      </BrowserRouter>
    )

    await userEvent.click(screen.getByRole("link", {
      name: /home/i
    }))
    expect(screen.getByText("View Listings")).toBeInTheDocument()
    expect(screen.getByText("Sign In")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
  })

  it("has links that change the url", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true} sign_out_route="/users/sign_out"/>
      </BrowserRouter>
    )

    // View Listings
    const viewLink = screen.getByRole("link", { name: /view list/i })
    fireEvent.click(viewLink)
    expect(location.pathname).toBe("/apartmentindex")

    // Create Listing
    const createLink = screen.getByRole("link", { name: /create/i })
    fireEvent.click(createLink)
    expect(location.pathname).toBe("/apartmentnew")

    // Sign Out
    const outLink = screen.getByRole("link", { name: /sign out/i })
    fireEvent.click(outLink)
    expect(outLink.getAttribute("href")).toBe("/users/sign_out")
  })
})