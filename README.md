# 🏘 Apartment App

This apartment application was built to completely build out a curriculum shift to functional components.  Full CRUD was implemented and styling is reflective of [Figma wireframe](https://www.figma.com/file/If1WCghFfg5Balueeb2Tgv/Apartment-App?type=design&node-id=0%3A1&t=vKzKbBadzMqaOlfb-1) created for students.

## Deployment
Deployment was done through Render. Link can be found: [Apartment App](https://apartment-app-h19o.onrender.com/)

## 👨‍💻 Process to build application

```
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home index
```

## 🛠 Configurations

### Apartment Resource

The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

```bash
rails generate resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
rails db:migrate
```

### User and Apartment Associations

The Apartments will belong to a User and a User will have many apartments.

**app/models/apartment.rb**

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

**app/models/user.rb**

```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

### Devise Config

**config/environments/development.rb**

```ruby
This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

**config/initializers/devise.rb**

```ruby
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

Add this code into the following file:

**app/views/home/index.html.erb**

```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config

**app/views/layouts/application.html.erb**

```ruby
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

**config/routes.rb**

```ruby
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config

```bash
yarn add react-router-dom
```

**app/javascript/components/App.js**

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom"
```

### Reactstrap Config

```bash
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add reactstrap
```

**app/assets/stylesheets/application.scss**

```css
@import "bootstrap";
```

## ⚡️ Getting Started

Once you're able to clone the repository, within the root of the project directory, run:

```bash
bundle
yarn
rails db:setup
```

## 🏁 Start the App

```bash
rails s
```

See what is available already in the application.

- What can a USER do?
- What views (pages, components) are available?

## 🚗 Testing

To run the existing testing suite, run:

```bash
yarn test
rspec spec
```
