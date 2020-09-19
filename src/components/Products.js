import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"
import Loader from "./Loader"
import Alert from "./Alert"

function Products() {
  const { productsLoading, products, productsError } = useSelector((state) => ({
    productsLoading: state.isLoading.productsLoading,
    products: state.products,
    productsError: state.error.productsError,
  }))

  const dispatch = useDispatch()
  const { fetchProducts } = {
    fetchProducts: () => dispatch({ type: "PRODUCTS_FETCH" }),
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <Grid container>
      {productsLoading && <Loader />}
      {productsError && <Alert errorMessage={productsError} />}
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
