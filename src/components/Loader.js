import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

export default function () {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  )
}
