import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"

function Cart({ cartItems = [] }) {
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

      {cartItems.map((cartItem) => (
        <Grid item xs={12}>
          <CartCard
            title={cartItem.title}
            price={cartItem.price}
            key={cartItem.id}
          />
        </Grid>
      ))}
      <PayButton amountToPay={0} />
    </Grid>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart,
})

export default connect(mapStateToProps)(Cart)
