class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(apartment_params)
        render json: apartment
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        render json: apartment
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json: apartment
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
    end
end
