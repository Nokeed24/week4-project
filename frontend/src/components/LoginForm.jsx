import React, {PureComponent} from 'react'

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email-login" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password-login" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Login</button>
			</form>
		)
	}
}
