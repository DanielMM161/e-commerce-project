# Front End Project
Front End Project is a project that uses a fake API to fetch data from the service and emulate the behavior of an e-commerce website without payment gateways.

# Functioning
* All non-login users can do these things::
    * See All Products
    * See Products By Categories
    * Sort Products By category and prices
    * See info about Single Product
    * Create a Specific Product
    * Add/Delete item to the Shopping Cart
    * Login/Register
*All registered users can do the same, but if your role is administrator, you can do the following::
    * Delete a Specific Product
    * Edit Info Product

## 🛠 Tech stack & Open-source libraries
- [React](https://github.com/facebook/react) - version 18.2.0
- [TypeScript](https://github.com/Microsoft/TypeScript) - version 4.9.4
- [React Router](https://github.com/remix-run/react-router#readme) - Routes App
- [Redux](https://github.com/reduxjs/redux) - Global State
- [Styled Components](https://github.com/styled-components/styled-components) - Styles App version 5.3.6
- [Axios](https://github.com/axios/axios) - Construct the REST APIs  version 1.2.1
- [Jest](https://github.com/facebook/jest) - Testing 

## Project Structure
<details>
<summary>Open Project Structure</summary>
``` bash
└───src
    ├───assets
    ├───components
    │   ├───BreadCrumbs
    │   ├───Button
    │   ├───ButtonLoader
    │   ├───CardProduct
    │   ├───Cart
    │   │   └───component
    │   ├───Filter
    │   ├───Footer
    │   ├───Forms
    │   │   ├───CreateProduct
    │   │   ├───DeleteProduct
    │   │   ├───EditProduct
    │   │   ├───Login
    │   │   └───Register
    │   ├───HeroImage
    │   ├───LoadingPulsating
    │   ├───Modal
    │   ├───NavBar
    │   ├───NoProductFound
    │   ├───ProductSlider
    │   ├───SideBar
    │   ├───SnackBar
    │   ├───Switch
    │   └───UserValidation
    ├───context
    ├───hooks
    ├───models
    ├───pages
    │   ├───CategoryProduct
    │   ├───Home
    │   │   └───components
    │   │       └───TopCategories
    │   ├───Products
    │   ├───Profile
    │   │   └───components
    │   │       └───Info
    │   └───SingleProduct
    │       └───components
    │           ├───ProductDetail
    │           └───UserAdmin
    ├───redux
    │   └───slices
    ├───services
    ├───styled
    ├───tests
    │   ├───Mocks
    │   ├───reducers
    │   └───servers
    └───utilities
```
</details>

## Open Api
Front End Project use the [Platzi Fake Api](https://fakeapi.platzi.com/)

Platzi Fake Store API can be used with any type of project that needs products, users, categories, authentication, and users in JSON format. You can use this API for prototyping e-commerce and learning about how to connect to an API with the best practices.

[Check The Documentation Here](https://fakeapi.platzi.com/en/rest/introduction)

## Take a Look
[Take a Look](https://bespoke-crepe-7013a1.netlify.app/)

## Deploy it
Clone the repository from github:  [Here](https://github.com/DanielMM161/e-commerce-project/archive/refs/heads/main.zip) 

 - npm install
 - npm run start