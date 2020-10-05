module.exports = function reverse (n) {
  return String(n)[0] != '-' ? +(String(n).split('').reverse().join('')) : +(String(n).split('').splice(1).reverse().join(''))
}
