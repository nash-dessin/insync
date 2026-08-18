# INSYNC  E-Commerce Store

A modern React-based e-commerce application where users can browse products, view product details, search for items, manage their shopping cart, and access a protected checkout page.

The project demonstrates a structured React application using reusable components, React Router for navigation, Context API for global state management, and Fetch for retrieving product data from an API.

## Features

* Browse a collection of products
* View detailed information about individual products
* Search and filter products
* Add and remove products from the shopping cart
* Update product quantities in the cart
* View cart totals
* Protected checkout page
* Responsive user interface
* Reusable React components
* Global state management with Context API
* Client-side routing with React Router
* Product data fetched from an external API

## Tech Stack

* **React** — Frontend UI library
* **React Router** — Application routing and navigation
* **Context API** — Global state management
* **Fetch / Axios** — API requests
* **JavaScript** — Application logic
* **CSS** — Styling

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── CartItem.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── Checkout.jsx
│
├── context/
│   └── CartContext.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd <project-directory>
```

Install the dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Application Flow

1. Users land on the home page and browse available products.
2. Users can search for products or select a product to view its details.
3. Products can be added to the shopping cart.
4. The cart allows users to review products, change quantities, and remove items.
5. Users can proceed to checkout.
6. The checkout page is protected and requires the user to be authenticated.

## Routing

The application uses React Router to manage navigation between pages.

Example routes include:

```text
/                  → Home
/products/:id      → Product Details
/cart              → Shopping Cart
/login             → Login
/checkout          → Protected Checkout
```

## State Management

The Context API is used to manage application-wide state, particularly the shopping cart.

The cart context handles functionality such as:

* Adding products
* Removing products
* Updating quantities
* Calculating cart totals
* Accessing cart state from different components

This avoids passing cart-related state through multiple levels of components.

## API

Product information is loaded from an external API using either the native `fetch` API or Axios.

The API layer is separated from the UI components to keep the application organized and easier to maintain.

## Protected Routes

The checkout page is protected so that only authenticated users can access it.

Unauthenticated users are redirected to the login page before they can proceed with checkout.

## Future Improvements

Possible improvements include:

* User registration and authentication
* Persistent cart storage
* Payment integration
* Product categories and advanced filtering
* Product reviews and ratings
* Order history
* Backend integration
* Loading and error states
* Improved accessibility
* Unit and integration testing

## License

This project is intended for educational and portfolio purposes.
