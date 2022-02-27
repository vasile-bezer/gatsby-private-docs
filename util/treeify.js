function treeify(toc) {
  const treeList = []
  const lookup = {}
  toc.forEach(obj => {
    const parent = lookup[obj.myParent]
    const { children = [], myText: title, myId: id } = obj
    const aux = {
      children,
      title,
      id,
    }
    lookup[aux.id] = aux

    if (parent) {
      aux.uri = parent.uri + "/" + id.toLowerCase()
      parent.children.push(aux)
    } else {
      aux.uri = id.toLowerCase()
      treeList.push(aux)
    }
  })
  return treeList
}

module.exports = { treeify }
