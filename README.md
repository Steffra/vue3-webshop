# Vue3 webshop
### A small webshop-type application, written in Vue3 with reactivity transform

## Features:
- **Two pages:** /products and /cart
- **Product page:**
  - Lists all products and their information, and enables adding each individual product to cart in various amounts, with respect to minOrderAmount
  - When product is added to cart its available amount should be decremented by the amount added. Adding more than the total amount should not be possible.
- **Cart page:**
  - Displays the products added to the cart: total amount currently added, total price.
  - Allows removing products from cart.


## Installation:

### Prerequisites:
-  **docker compose**
   -  In order not to rely on a specific version of npm or node, the application is packaged in a docker image. Docker compose is used to build and run the application.

#### Start the application with the following command:
- ```docker compose up```

#### Access the application at:
- ``` http://localhost:3000```


## Tech stack:
- **VueJS 3**
  - Composition API (script setup)
  - reactivity transform
  - vitest
- **TailwindCSS**
- **Docker**
