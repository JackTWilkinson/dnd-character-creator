import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CreateNew from "./CreateNew";

function NoMatch()
{
	return <h1>404 - Page Not Found!</h1>
}

export default function AppRouter()
{
	return (
		<Router>
			<div>
				<nav className="navBar">
					<ul className="navList">
						<li className="navItem active">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/create/new" component={CreateNew}/>
					{/*<Route path="/create/class" component={ClassSelect}/>*/}
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	)
}



