import React from "react"
import { useSelector } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"
import Loader from "./Loader"
import Alert from "@material-ui/lab/Alert"

function Cart({ cartItems = [] }) {
  const { loading, error } = useSelector((state) => ({
    loading: state.loadingStatus.cartLoading,
    error: state.error.cartError,
  }))

  return (
    <Grid container>
      {loading && <Loader />}
      {error && <Alert />}
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
          <CartCard cartItem={cartItem} key={cartItem.id} />
        </Grid>
      ))}
      <PayButton
        amountToPay={cartItems.reduce((total, item) => total + item.price, 0)}
      />
    </Grid>
  )
}

export default Cart
