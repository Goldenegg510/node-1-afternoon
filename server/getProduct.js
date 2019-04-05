const Products = require('../products.json')


function getProduct(req, res){
  const {id} = req.params // get id from browser
// filter the list to find the correct id.
  let product = Products.filter((element, i, arr) =>{
    return +element.id === +id
  })
  if (product.length === 0) {
    console.log("item not found in list")
    res.status(500).send('Item not found in list')
  } else {
  // send item back
  res.send(product[0])
}
  
}

module.exports = getProduct