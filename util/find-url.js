function findUrl(slug, arr) {
  return arr.reduce((a, item) => {
    if (a) return a
    if (item.uri.includes(slug)) return item
    if (item.children) return findUrl(slug, item.children)
  }, null)
}

module.exports = { findUrl }
