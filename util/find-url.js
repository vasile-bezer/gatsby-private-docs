function findUrl(slug, arr) {
  return arr.reduce((prev, current) => {
    if (prev) return prev
    if (current.uri.includes(slug)) return current
    if (current.children) return findUrl(slug, current.children)
  }, null)
}

module.exports = { findUrl }
