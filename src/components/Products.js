import React, { useEffect } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"

function Products({ products = [], fetchProducts }) {
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

const mapStateToProps = ({ isLoading, products, error }) => ({
  isLoading,
  products,
  error,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch({ type: "PRODUCTS_FETCH" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
