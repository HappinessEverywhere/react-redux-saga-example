import React, { useEffect } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"
import Loader from "./Loader"

function Products({ products = [], productsLoading, fetchProducts }) {
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <Grid container>
      {productsLoading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))
      )}
    </Grid>
  )
}

const mapStateToProps = ({
  isLoading: { productsLoading },
  products,
  error,
}) => ({
  productsLoading,
  products,
  error,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch({ type: "PRODUCTS_FETCH" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
