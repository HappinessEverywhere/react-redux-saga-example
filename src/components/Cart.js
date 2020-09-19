import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"
import Loader from "./Loader"
import Alert from "./Alert"

function Cart() {
  // State
  const { cartLoading, cartItems, cartError } = useSelector((state) => ({
    cartLoading: state.isLoading.cartLoading,
    cartItems: state.cart,
    cartError: state.error.cartError,
  }))

  // Dispatch
  const dispatch = useDispatch()
  const { fetchCart } = {
    fetchCart: () => dispatch({ type: "CART_FETCH" }),
  }

  // Life cycle methods
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

export default Cart
