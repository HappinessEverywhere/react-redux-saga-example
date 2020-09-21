import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import "./App.css"

import PrimaryAppBar from "./components/PrimaryAppBar"
import Products from "./components/Products"
import Cart from "./components/Cart"

import { getProducts, getCartItems } from "./api"

const useStyles = makeStyles({
  bgGrey: {
    backgroundColor: "#ddd",
  },
  p10: {
    padding: "6px",
  },
})

function App() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  useEffect(async () => {
    const resultsProducts = await getProducts()
    setProducts(resultsProducts.products)
    const resultsCartItems = await getCartItems()
    setCartItems(resultsCartItems.cartItems)
  }, [])
  return (
    <>
      <PrimaryAppBar itemCount={cartItems.length} />
      <Grid container className={classes.bgGrey}>
        <Grid item xs={9} className={classes.p10}>
          <Products products={products} />
        </Grid>
        <Grid item xs={3} className={classes.p10}>
          <Cart cartItems={cartItems} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
