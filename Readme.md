# Passport Boilerplate Nodejs

Passport Boilerplate Nodejs is a base Node.js API server with authentication and session-handling. 

Data storage in MongoDB.
Session handling in Redis.

### Tech

Passport Boilerplate Nodejs uses a number of open source projects to work properly:

* [node.js] - Node.js JavaScript runtime
* [express.js] - the fast, unopinionated, minimalist web framework for node
* [mongoose] - MongoDB object modeling designed to work in an asynchronous environment.
* [passport] - Simple, unobtrusive authentication for Node.js
* [body-parser] - Node.js body parsing middleware
* [cookie-parser] - cookie parsing middleware
* [express-session] - Simple session middleware for Express
* [passport-local] - Username and password authentication strategy for Passport and Node.js.
* [connect-redis] - Redis session store for Connect

[node.js]: <http://nodejs.org>
[express.js]: <https://github.com/expressjs>
[mongoose]: <https://github.com/Automattic/mongoose>
[passport]: <https://github.com/jaredhanson/passport>
[body-parser]: <https://github.com/expressjs/body-parser>
[cookie-parser]: <https://github.com/expressjs/cookie-parser>
[express-session]: <https://github.com/expressjs/session>
[passport-local]: <https://github.com/jaredhanson/passport-local>
[connect-redis]: <https://github.com/tj/connect-redis>


### Installation

You need dependencies installed:

```sh
$ npm i
```

Set enviroment variables if needed (default values below)

```sh
$ export HOST=http://127.0.0.1
$ export PORT=1337
$ export MONGO_URI=mongodb://localhost/boilerplate
$ export REDIS_HOST=127.0.0.1
$ export REDIS_PORT=6379
$ export REDIS_SECRET=redissecret
```

Run

```sh
$ node app.js
```

License
----

MIT

### Version
0.1

**Free Software, Hell Yeah!**
