import React from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { centsToDollar } from "../util"

const useStyles = makeStyles({
  root: {
    margin: "6px",
  },
})

function ProductCard({ product, cartItems, addCartItem }) {
  const classes = useStyles()

  const inCart = cartItems.findIndex((item) => item.id === product.id) >= 0

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {centsToDollar(product.price)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => addCartItem(product)}
          disabled={inCart}
        >
          {inCart ? "In Cart" : "Add to cart"}
        </Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCartItem: (cartItem) => dispatch({ type: "ADD_CART", payload: cartItem }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
