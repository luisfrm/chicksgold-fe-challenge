# Chicks Gold FE Challenge

This is a Front-End challenge by Chicks Gold made in TypeScript and React.

## Description

The goal of this challenge is to create a simple web application that allows users to search for a specific product and add it to their cart. The application should have a responsive design and should be accessible to users with disabilities.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 22.0.0 or higher)
- [Bun](https://bun.sh/install) (version 0.6.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ChicksGold/ChicksGold-FE-Challenge.git
```

2. Navigate to the project directory:

```bash
cd ChicksGold-FE-Challenge
```

3. Install the project dependencies:

```bash
bun install
```

4. Start the development server:

```bash
bun run dev
```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

### Docker

If you prefer to use Docker, you can build and run the application using the following commands:

```bash
docker build -t chicks-gold-fe-challenge .
docker run -p 5173:80 chicks-gold-fe-challenge
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### Docker Compose

If you prefer to use Docker Compose, you can start the application using the following command:

```bash
docker-compose up
```

Open your browser and navigate to `http://localhost:8080` to view the application.

## Deployment

Site is deployed on [Vercel](https://vercel.com/).
You're free to use the deployed version at [chicksgold-fe-challenge.vercel.app](https://chicksgold-fe-challenge.vercel.app/).

## Usage

To use the application, follow these steps:

1. Open the application in your browser.
2. Enter a product name in the search bar.
3. Click the "Add to Cart" button to add the product to your cart.

## Features

- Responsive design: The application should be accessible to users with disabilities.
- Search functionality: Users should be able to search for a specific product by entering its name in the search bar.
- Cart functionality: Users should be able to add products to their cart by clicking the "Add" button.
- Product details: Users should be able to view detailed information about each product, including its name, price, and image.
- Cart summary: Users should be able to view a summary of their cart, including the total price and the number of items in the cart.
- I used CSS variables to make the application more customizable. I added it into the `src/styles/variables.css` file.
- I also added the css files to the `src/styles/` folder because I wanted to keep the styles separated from the components since this is a single page application and I prefered to keep the styles in a separate folder.
- I used the `useStore` hook to manage the state of the cart. I created a `Cart` interface to define the cart state and a `CartItem` interface to define the items in the cart.
- I used css media queries to adjust the layout of the application based on the screen size.

## Contributing

Contributions and suggestions are welcome!