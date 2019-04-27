[![CircleCI](https://circleci.com/gh/tomiadebanjo/turin-backend/tree/develop.svg?style=svg)](https://circleci.com/gh/tomiadebanjo/turin-backend/tree/develop)

# ECOMMERCE-SHOP

e-commerce application

## MVP features

* [x] Users can see all items when entering the website.
* [x] Items are displayed properly based on the selected department and category.
* [x] Users can search items through search box.
* [x] Support paging if we have too many items.
* [x] Users can see item details by selecting a specific item.
* [x] Users can add items to their shopping carts.
* [x] Users can register/login using website custom forms, or social login libraries.
* [x] Users can checkout with 3rd party payment gateways: Paypal or Stripe.
* [x] Users will get confirmations over emails about their orders.

## API

API is live at https://ecommerce-backend-9012.herokuapp.com/

## API Documentation

API documenntation: https://documenter.getpostman.com/view/5572663/S1ETQwDJ

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ab45639974f498a3866e)

## Getting started

### Prerequisites

In order to install and run this project locally, you would need to have the following installed on you local machine.

* [**Node JS**](https://nodejs.org/en/)
* [**Express**](https://expressjs.com/)
* [**MySQL**](https://www.mysql.com/downloads/)

### Installation

* Clone this repository

```sh
git clone https://github.com/tomiadebanjo/turin-backend.git
```

* Navigatet to the project directory

```sh
cd path/to/turin-backend

```

* Run `npm install` or `yarn` to instal the projects dependencies
* create a `.env` file and copy the contents of the `.env.sample` file into it and supply the values for each variable

```sh
cp .evn.sample .env
```

* Create a MySQL database and run the `sql` file in the database directory to migrate the database

```sh
cat ./src/database/migrations/database.sql | mysql -u <dbuser> -D <databasename> -p
```

## Stripe Integration

Shopping orders are paid for using a Stripe integration. In order to use the stripe endpoint send a `POST` request to `/api/v1/stripe`

You will need to provide a `stripeToken`. To get the token fill out the form at https://ecommerce-turing-core.herokuapp.com/stripe

## Authors

* [Tomi Adebanjo](https://github.com/tomiadebanjo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
