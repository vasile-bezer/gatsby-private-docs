import React from "react"
import { navigate } from "gatsby"
import Form from "components/form"
import View from "components/view"
import { handleLogin, isLoggedIn } from "auth/auth"

class Login extends React.Component {
	constructor(props, first, second, third){
		console.log(props, first, second, third);
		super(props);
	}

	state = {
		username: ``,
		password: ``,
	}

	handleUpdate(event) {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		handleLogin(this.state)
	}

	render() {
		if (isLoggedIn()) {
			navigate(`/app/profile`)
		}

		return (
			<View title="Accedi all'app">
				<Form
					handleUpdate={e => this.handleUpdate(e)}
					handleSubmit={e => this.handleSubmit(e)}
				/>
			</View>
		)
	}
}

export default Login
