require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let (:user) {User.create email: 'elyse@test.com', password: 'test123', password_confirmation: 'test123'}

  
  describe "GET /index" do
    it "gets a list of apartments" do
      user.apartments.create(street: "4 Privet Drive",
      city: "Little Whinging",
      state: "Surrey",
      manager: "Mr. Potter",
      email: "potter@example.com",
      price: 2000,
      bedrooms: 3,
      bathrooms: 2,
      pets: "yes",
      image:
        "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg")

        get '/apartments'

        apartment = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartment.length).to eq 1
    end
  end

  describe "POST/create" do
    it "creates an apartment" do
      apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to have_http_status(200)
      apartment = Apartment.first
      expect(apartment.street).to eq "4 Privet Drive"
      expect(apartment.city).to eq "Little Whinging"
      expect(apartment.state).to eq "Surrey"
      expect(apartment.manager).to eq "Mr. Potter"
      expect(apartment.email).to eq "potter@example.com"
      expect(apartment.price).to eq "2000"
      expect(apartment.bedrooms).to eq 3
      expect(apartment.bathrooms).to eq 2
      expect(apartment.pets).to eq "yes"
      expect(apartment.image).to eq "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg"
    end
  end

  describe "PATCH/update" do
    it "updates an apartment" do
      apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      apartment = Apartment.first

      updated_apartment_params = {
        apartment: {
          street: "4 Privet Drive",
          city: "Little Whinging",
          state: "Surrey",
          manager: "Mr. Potter",
          email: "potter@example.com",
          price: "2500",
          bedrooms: 3,
          bathrooms: 2,
          pets: "yes",
          image:
            "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
          user_id: user.id
          }
      }

      patch "/apartments/#{apartment.id}", params: updated_apartment_params

      updated_apartment = Apartment.find(apartment.id)
      expect(response).to have_http_status(200)
      expect(updated_apartment.price).to eq "2500"
    end
  end


  describe "DELETE/destroy" do 
    it "deletes an apartment" do
      apartment_params = {
        apartment: {
          street: "4 Privet Drive",
          city: "Little Whinging",
          state: "Surrey",
          manager: "Mr. Potter",
          email: "potter@example.com",
          price: 2000,
          bedrooms: 3,
          bathrooms: 2,
          pets: "yes",
          image:
            "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
          user_id: user.id
          }
      }

      post "/apartments", params: apartment_params
      apartment = Apartment.first
      delete "/apartments/#{apartment.id}"
      expect(response).to have_http_status(200)
      apartments = Apartment.all
      expect(apartments).to be_empty
    end
  end
end
