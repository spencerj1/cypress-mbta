function replaceMultiple(str, vals) {
  let result = str
  for (const val in vals) {
    result = result.replace(new RegExp(val, 'g'), vals[val])
  }
  return result
}

module.exports = {
  replaceMultiple,
}
