# GUARDIAN LITE BACKEND

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd <directory>
$ npm install
$ nodemon dev
```

For PROD, DEV, TEST environments...

| Config                            | README                                                             |
| --------------------------------- | ------------------------------------------------------------------ |
| custom-environment-variables.json | [jwtPrivateKey]                                                    |
| default.json                      | [jwtPrivateKey, username, password, database, host, dialect, port] |
| test.json                         | [jwtPrivateKey, username, password, database, host, dialect, port] |

### Packages

| Node Package        | About                                                                                                                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @types/jest         | This package contains type definitions for Jest (https://jestjs.io/).                                                                                                                                                                    |
| bcrypt              | A library to help you hash passwords. (https://github.com/kelektiv/node.bcrypt.js)                                                                                                                                                       |
| config              | Node-config organizes hierarchical configurations for your app deployments. (https://github.com/lorenwest/node-config)                                                                                                                   |
| cors                | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. (https://github.com/expressjs/cors)                                                                           |
| express             | Fast, unopinionated, minimalist web framework for node. (https://github.com/expressjs/express)                                                                                                                                           |
| expres-async-errors | A dead simple ES6 async/await support hack for ExpressJS. (https://github.com/davidbanham/express-async-errors)                                                                                                                          |
| helmet              | Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help! (https://github.com/helmetjs/helmet)                                                                               |
| jsonwebtoken        | An implementation of JSON Web Tokens.(https://github.com/auth0/node-jsonwebtoken)                                                                                                                                                        |
| lodash              | The Lodash library exported as Node.js modules. (https://github.com/lodash/lodash)                                                                                                                                                       |
| mysql2              | MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more. (https://github.com/sidorares/node-mysql2)                                        |
| passport            | [jwtPrivateKey, username, password, database, host, dialect, port]                                                                                                                                                                       |
| passport-local      | [jwtPrivateKey, username, password, database, host, dialect, port]                                                                                                                                                                       |
| sequelize           | Sequelize is a promise-based Node.js ORM for MySQL. It features solid transaction support, relations, eager and lazy loading, read replication and more. Sequelize follows Semantic Versioning. (https://github.com/sequelize/sequelize) |
| sequelize-cli       | The Sequelize Command Line Interface (CLI). (https://github.com/sequelize/cli)                                                                                                                                                           |
| winston             | A logger for just about everything. (https://github.com/winstonjs/winston)                                                                                                                                                               |

### Development

Open your favorite Terminal and run these commands.

First Tab:

```sh
$ nodemon dev
```

Second Tab:

```sh
$ npm test
```
