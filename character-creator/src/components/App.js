import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CharacterCreation from "./CharacterCreation";

function NoMatch()
{
	return <h1>404 - Page Not Found!</h1>
}

function AppRouter()
{
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about/">About</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/about/" component={About}/>
					<Route path="/create/" component={CharacterCreation}/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter;



