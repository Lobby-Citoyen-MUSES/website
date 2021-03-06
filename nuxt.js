const express = require('express')
const app = express()
const { Nuxt } = require('nuxt-start')

const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

app.use(async (req, res) => {
    await nuxt.ready()
    nuxt.render(req, res)
})

module.exports = app