/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const startCase = require("lodash/startCase")
const json = require("./content/888toc.json")
const { treeify } = require("./util/treeify")
const { findUrl } = require("./util/find-url")
const treeList = treeify(json)

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
	const parent = getNode(node.parent)
	const title = node.frontmatter.title || startCase(parent.name)
	let uri = node.frontmatter.slug
	if (!uri && parent.relativePath) {
	  uri = parent.relativePath.replace(parent.ext, "")
	}
	if (!uri) {
	  reporter.panic(
		`Can not create node with title: ${title} there is no relative path or frontmatter to set the "slug" field`
	  )
	  return
	}
	if (uri === "index") {
	  uri = ""
	}
	const item = findUrl(uri.toLowerCase(), treeList)
	createNodeField({
	  name: `slug`,
	  node,
	  value: `${item.uri}`,
	})
	createNodeField({
	  name: "id",
	  node,
	  value: node.id,
	})
	createNodeField({
	  name: "title",
	  node,
	  value: `${item.title}`,
	})
  }
}

/* per ogni richiesta nel client di una pagina che comincia con /app 
  la pagina viene creata */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
	page.matchPath = `/app/*`
	//page.context = { path: page.path }
	/*
	 * NOTE: There are a few reserved names that cannot be used in context. They are:
	 *  path, matchPath, component, componentChunkName, pluginCreator___NODE, and pluginCreatorId.
	 *
	 */
	// Update the page.
	createPage(page)
  }
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const node = {
	/*
	id: createNodeId(`toc-${t.myId}`),*/
	content: JSON.stringify(treeList),
	id: createNodeId(`toc`),
	internal: {
	  type: "tree",
	  contentDigest: createContentDigest(treeList),
	},
  }
  actions.createNode(node)
}
