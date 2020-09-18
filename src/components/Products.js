import React, { useEffect } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"
import Loader from "./Loader"
import Alert from "./Alert"

function Products({
  products = [],
  productsLoading,
  productsError,
  fetchProducts,
}) {
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

const mapStateToProps = ({
  isLoading: { productsLoading },
  products,
  error: { productsError },
}) => ({
  productsLoading,
  products,
  productsError,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch({ type: "PRODUCTS_FETCH" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
