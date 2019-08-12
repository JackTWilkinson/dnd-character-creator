import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import About from "./About";
import CreateNew from "./CreateNew";
import ClassSelect from "./ClassSelect";

function NoMatch()
{
	return <h1>404 - Page Not Found!</h1>
}

export default function AppRouter()
{
	return (
		<Router>
			<div>
				<Navbar id="myNavTest" fixed="top" variant="dark" bg="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link to="/">Home</Nav.Link>
							<Nav.Link to="/about">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/create/new" component={CreateNew}/>
					<Route path="/create/class" component={ClassSelect}/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	)
}



