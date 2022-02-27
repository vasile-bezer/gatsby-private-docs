let lastId = 0

export default function f(prefix = "id") {
  lastId++
  return `${prefix}${lastId}`
}
