import React from "react"
import { useSelector } from "react-redux"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"

import Loader from "./Loader"
import Alert from "./Alert"

function Products({ products = [] }) {
  const { loading, error } = useSelector((state) => ({
    loading: state.loadingStatus.productsLoading,
    error: state.error.productsError,
  }))
  return (
    <Grid container>
      {loading && <Loader />}
      {error && <Alert />}
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
