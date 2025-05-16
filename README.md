# 🛒 React Shopping Cart Challenge

This is my coding challenge solution for a responsive, accessible shopping cart built with React and SCSS. I utilized the [DummyJSON Cart API](https://dummyjson.com/docs/carts) for mock data.

## ✨ Features

- Fetches mock cart data from DummyJSON API
- Renders a list of products with title, and price
- Allows users to:
  - Remove individual products from the cart
  - Reset the cart to its original state of 6 products
- Displays cart summary:
  - Number of products
  - Total cost
- Componentized for reusability and readability
- Responsive layout with accessible markup

## 🧱 Built With

- React (functional components + hooks)
- SCSS (modular BEM styling)
- No external libraries other than React

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-cart-challenge.git
   cd react-cart-challenge

##  📸 Screenshots
![Screenshot 2025-05-15 203730](https://github.com/user-attachments/assets/85b492d7-c7c6-4864-804c-6a27d5954131)
![Screenshot 2025-05-15 204934](https://github.com/user-attachments/assets/ca0eedce-8b62-4292-b2d2-55ee49e0f1e7)
![Screenshot 2025-05-15 203745](https://github.com/user-attachments/assets/27f70597-e7eb-48cf-9bff-6d0329677371)

##  📝 Notes

This project was completed over the course of 4 hours with one break. If time allowed, here are a few additional improvements I would make:
- Use I18n to localize strings such as "Shopping Cart" and "Total"
- Organize SCSS file into separate, smaller files for better readability
- Use SCSS variables to ensure standard sizing is implemented throughout and for maintainability purposes
- Set up testing with Jest to validate component functionality and ensure reliability.
- Screen for further accessibility improvements like aria-labels
- Persist cart state to sessionStorage or similar to avoid a reset on page refresh
- Use dedicated components or spinners for better UX when fetching or failing to load cart data.
- Move hardcoded values (like API URL or breakpoints) to a separate constants file for maintainability.
