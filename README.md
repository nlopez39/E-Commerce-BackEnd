# E-Commerce-BackEnd

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)

## Description

This Express.js app is the backend of an e-commerce site which has been configured to use Sequelize to interact with a MySQL database. Users can send HTTP Requests that will allow them to either Create, Read, Update, or Delete specific data.

### Demo

[Demo Video](https://drive.google.com/file/d/1v7QHCB_FJ8MPV69eFSYBRYsFfP_mL116/view?usp=sharing)

## Installation

To install this project into your own, use git clone in your command-line.

## Usage

To use this project,

1. Go to the cloned files, connect to the MySQL Terminal and create the database by running `source schema.sql`. Make sure you are under the 'db' file path.
2. Open a new terminal and run `npm run seed` to import the database tables. Be sure you’re in the correct location in your terminal first! (the Develop folder path)
3. Then run `npm start` to start the server.
4. Next, send HTTP requests to the server from any client API of your choice. For this project, Insomnia was used to send GET, PUT, POST and DELETE requests.

## Credits

https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/#belongsto--hasmany--hasone-association
https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad

## Tests

Use Insomnia or any other API client to send HTTP requests and test that the app is functioning correctly. In this case, Insomnia was used to send GET, PUT, POST and DELETE requests to the server.

Download Insomnia:[Start Using Insomnia](https://insomnia.rest/download)

## License

![Static Badge](https://img.shields.io/badge/MIT-blue)
