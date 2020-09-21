import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import "./App.css"

import PrimaryAppBar from "./components/PrimaryAppBar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import { PRODUCTS_FETCH, CART_ITEMS_FETCH } from "./store/constants"

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

  const { products, cartItems } = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()
  dispatch({ type: PRODUCTS_FETCH })
  dispatch({ type: CART_ITEMS_FETCH })

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
