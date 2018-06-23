'use strict'

const fp = require('fastify-plugin')
const WampServer = require('wamp-server')

const defaultOptions = {
  port: 3443,
  realms: ['fastify.wamp.pubsub', 'fastify.wamp.rpc']
}

function fastifyWamp (fastify, opts, next) {
  const serverOptions = Object.assign({}, defaultOptions, opts)

  const router = new WampServer(serverOptions)

  fastify
    .decorate('wampRouter', router)
    .addHook('onClose', close)

  next()
}

function close (fastify, done) {
  fastify.wampRouter.close(done)
}

module.exports = fp(fastifyWamp, {
  fastify: '>=1.x',
  name: 'fastify-wamp-router'
})
