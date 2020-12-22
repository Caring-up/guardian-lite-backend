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
