import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import "./App.css"

import PrimaryAppBar from "./components/PrimaryAppBar"
import Products from "./components/Products"
import Cart from "./components/Cart"

import { getProducts } from "./api"

import { Provider } from "react-redux"

import configureStore from "./store"
const store = configureStore()

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

  return (
    <Provider store={store}>
      <PrimaryAppBar />
      <Grid container className={classes.bgGrey}>
        <Grid item xs={9} className={classes.p10}>
          <Products />
        </Grid>
        <Grid item xs={3} className={classes.p10}>
          <Cart />
        </Grid>
      </Grid>
    </Provider>
  )
}

export default App
