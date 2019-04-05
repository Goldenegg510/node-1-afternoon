const express = require('express')
const app = express()
const port = 4500
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.listen(port, () => {
  console.log('listening to port', port)
})

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)