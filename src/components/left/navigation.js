import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import NavItem from "./nav-item"
import { navList } from "components/left/left.module.css"

const Navigation = () => {
	const result = useStaticQuery(graphql`
	query {
		tree {
		content
		}
	}
	`)

	const gerarchia = JSON.parse(result.tree.content);

	return (
		<ul className={navList}>
			{gerarchia.map(
					function(item, index){
						return (
							<NavItem key={index} item={item} />
						)
					}
			)}
		</ul>
	)
}

export default (Navigation)
