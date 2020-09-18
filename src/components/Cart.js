import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"
import Loader from "./Loader"

function Cart({ cartItems = [], cartLoading }) {
  return (
    <Grid container>
      <Typography
        align="center"
        gutterBottom
        variant="h5"
        style={{ margin: "auto" }}
      >
        CART
      </Typography>

      {cartLoading && <Loader />}

      {cartItems.map((cartItem) => (
        <Grid item xs={12} key={cartItem.id}>
          <CartCard cartItem={cartItem} />
        </Grid>
      ))}
      <PayButton amountToPay={0} />
    </Grid>
  )
}

const mapStateToProps = ({ cart, isLoading: { cartLoading } }) => ({
  cartItems: cart,
  cartLoading,
})

export default connect(mapStateToProps)(Cart)
