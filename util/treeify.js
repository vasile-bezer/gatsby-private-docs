function treeify(toc) {
  const treeList = []
  const lookup = {}
  toc.forEach(obj => {
    const parent = lookup[obj.myParent]
    const aux = {}
    aux.title = obj.myText
    aux.children = []
    aux.id = obj.myId
    lookup[aux.id] = aux

    if (parent) {
      aux.uri = parent.uri + "/" + obj.myId
      parent.children.push(aux)
    } else {
      aux.uri = obj.myId
      treeList.push(aux)
    }
  })
  return treeList
}

module.exports = { treeify }
