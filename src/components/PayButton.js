import React from "react"
import { useSelector } from "react-redux"
import Button from "@material-ui/core/Button"

import { centsToDollar } from "../util"

function PayButton() {
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
  }))

  const amountToPay = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <Button fullWidth size="large" variant="contained" color="primary">
      PAY {centsToDollar(amountToPay)}
    </Button>
  )
}

export default PayButton
