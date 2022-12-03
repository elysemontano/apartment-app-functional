import React from "react"
import { NavLink } from "react-router-dom"

const Home = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <p>We are excited to help you on your search for your next home. You can view all recent listings and contact the apartment manager.  If you are an apartment manager and wish to list your apartment, please log in to create a new listing or modify a previous listing.  Home is where the heart is, and our heart is to find you a new home.</p>

        {!props.logged_in ? 
          <>
            <a href={props.sign_in_route}>
              <button>Sign In</button>
            </a>
            <a href={props.new_user_route}>
              <button>Sign Up</button>
            </a>
          </>
          :
          <>
            <NavLink to="/apartmentindex">
              <button>My Listings</button>
            </NavLink>
            <NavLink to="/apartmentnew">
              <button>New Listing</button>
            </NavLink>
          </>
        }

      </div>
    </>
  )
}

export default Home