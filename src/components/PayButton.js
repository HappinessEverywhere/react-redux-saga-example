import React from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"

import { centsToDollar } from "../util"

function PayButton({ cartItems }) {
  const amountToPay = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <Button fullWidth size="large" variant="contained" color="primary">
      PAY {centsToDollar(amountToPay)}
    </Button>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart,
})

export default connect(mapStateToProps)(PayButton)
