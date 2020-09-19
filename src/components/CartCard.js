import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { centsToDollar } from "../util"

function CartCard({ cartItem }) {
  // Selectors
  const { loadingCartItemId } = useSelector((state) => ({
    loadingCartItemId: state.cart.loadingCartItemId,
  }))
  // Dispatch
  const dispatch = useDispatch()
  const { removeCartItem } = {
    removeCartItem: (cartItem) =>
      dispatch({ type: "REMOVE_CART", payload: cartItem }),
  }

  const isItemLoading = loadingCartItemId === cartItem.id

  let buttonText = isItemLoading ? "..." : "Remove"

  return (
    <Grid
      container
      style={{
        backgroundColor: "#fff",
        padding: "6px",
        margin: "6px 0",
        borderRadius: "4px",
      }}
    >
      <Grid item xs={9}>
        <Typography variant="h5" component="p">
          {cartItem.title}
        </Typography>

        <Typography variant="subtitle1" component="p">
          {centsToDollar(cartItem.price)}
        </Typography>
      </Grid>

      <Grid container item xs={3} justify="flex-end">
        <Button
          size="small"
          color="primary"
          onClick={() => removeCartItem(cartItem)}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  )
}

export default CartCard
