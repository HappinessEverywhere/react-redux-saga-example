import React from "react"
import Button from "@material-ui/core/Button"
import { centsToDollar } from "../util"

function PayButton({ amountToPay = 0 }) {
  return (
    <Button fullWidth size="large" variant="contained" color="primary">
      PAY {centsToDollar(amountToPay)}
    </Button>
  )
}

export default PayButton
