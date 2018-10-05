import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Layouts 
import Nav from './components/layouts/Nav'

// Routes
import Users from './components/users/Users'
import Repos from './components/repositories/Repos'
import Issues from './components/issues/Issues'
import UserDetails from './components/users/UserDetails'
import RepoDetails from './components/repositories/RepoDetails'
import IssueDetails from './components/issues/IssueDetails'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* Navbar */}
					<Nav />

					{/* Routes */}
					<Switch>
						<Route exact path='/' component={ Users } />
						<Route path='/repos' component={ Repos } />
						<Route path='/issues' component={ Issues } />

						{/* With Params */}
						<Route path='/:user' component={ UserDetails } />
						<Route path='/:repo' component={ RepoDetails } />
						<Route path='/:issue' component={ IssueDetails } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;