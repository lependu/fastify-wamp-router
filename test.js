'use strict'

const tap = require('tap')
const Fastify = require('fastify')
const fastifyWamp = require('./plugin')

const { test } = tap

test('Registers wampRouter | default options', t => {
  t.plan(5)
  const fastify = Fastify()
  t.tearDown(fastify.close.bind(fastify))

  fastify
    .register(fastifyWamp)
    .ready(err => {
      t.error(err)
      t.ok(fastify.hasDecorator('wampRouter'))

      const { wampRouter: { options, port } } = fastify

      t.equal(port, 3443)
      t.equal(options.port, 3443)
      t.deepEqual(options.realms, ['fastify.wamp.pubsub', 'fastify.wamp.rpc'])
    })
})

test('Registers wampRouter | custom options', t => {
  t.plan(4)
  const fastify = Fastify()
  t.tearDown(fastify.close.bind(fastify))

  const routerOpts = { port: 3333, realms: ['custom.realm'] }
  fastify
    .register(fastifyWamp, routerOpts)
    .ready(err => {
      t.error(err)
      t.ok(fastify.hasDecorator('wampRouter'))

      const { wampRouter: { options, port } } = fastify

      t.equal(port, 3333)
      t.deepEqual(options, routerOpts)
    })
})
