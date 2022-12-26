import React from "react"
import notFoundBackground from "../assets/NotFound.png"
import Footer from "../components/Footer"

const NotFound = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${notFoundBackground})`}} className="not-found-background">
        <div className="not-found-text">
          <h1>404</h1>
          <h3>Oops, could not find that place</h3>
        </div>
      </div>
    </>
  )
}

export default NotFound