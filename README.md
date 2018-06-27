# fastify-wamp-router

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/lependu/fastify-wamp-router.svg?branch=master)](https://travis-ci.org/lependu/fastify-wamp-router)
[![Greenkeeper badge](https://badges.greenkeeper.io/lependu/fastify-wamp-router.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/lependu/fastify-wamp-router/badge.svg)](https://snyk.io/test/github/lependu/fastify-wamp-router)

WAMP *(Web Application Messaging Protocol)* router for fastify.
Under the hood it shares [ivaylopivanov/wamp-server](https://github.com/ivaylopivanov/wamp-server) instance,
which implements [Basic Profife](ivaylopivanov/wamp-server) following [WAMP](https://tools.ietf.org/html/draft-oberstet-hybi-tavendo-wamp-02) standards.
The options that you pass to `register` will be passed to the `wamp-server`.

## Install
```
$ npm i --save fastify-wamp-router 
```

## Example
```js
const Fastify = require('fastify')
const fastifyWamp = require('fastify-wamp-router')

const fastify = Fastify()

fastify.register('fastify-wamp', { 
  port 3443, 
  realms: ['fastify.wamp.pubsub', 'fastify.wamp.rpc'],
}

fastify.listen(3000)
```

You can connect to the router with any [authobahn.js](https://github.com/crossbario/autobahn-js) compatible library.

## Reference

- `port` `{number}` The port of the websocket connection.
- `realms` `{array|string}` The name(s) of the realm(s).

## Debugging

You can use the `DEBUG=wamp:*` environment variable.

## License
Licensed under [MIT](./LICENSE).
