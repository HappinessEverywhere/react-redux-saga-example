import React, { useEffect } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"
import Loader from "./Loader"
import Alert from "./Alert"

function Cart({ cartItems = [], cartLoading, fetchCart, cartError }) {
  useEffect(() => {
    fetchCart()
  }, [])
  return (
    <Grid container>
      {cartLoading && <Loader />}
      {cartError && <Alert errorMessage={cartError} />}
      <Typography
        align="center"
        gutterBottom
        variant="h5"
        style={{ margin: "auto" }}
      >
        CART
      </Typography>

      {cartItems.map((cartItem) => (
        <Grid item xs={12} key={cartItem.id}>
          <CartCard cartItem={cartItem} />
        </Grid>
      ))}
      <PayButton amountToPay={0} />
    </Grid>
  )
}

const mapStateToProps = ({
  cart,
  isLoading: { cartLoading },
  error: { cartError },
}) => ({
  cartItems: cart,
  cartLoading,
  cartError,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCart: () => dispatch({ type: "CART_FETCH" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
