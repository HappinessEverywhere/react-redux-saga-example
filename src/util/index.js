export const centsToDollar = (cents) => {
  return `$${(cents / 100).toFixed(2)}`
}

export const wait = (ms = Math.random() * 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
