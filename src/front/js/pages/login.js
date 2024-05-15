import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Private } from "./private";



const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function sendData(e) {
		e.preventDefault()
		actions.login(email, password)
	}
	

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center gap-3 p-4">
			<div className="form-container">
	<p className="title">Login</p>
	<form className="form" onSubmit={sendData}>
		<div className="input-group">
			<label htmlFor="login-email">Email</label>
			<input type="email" name="email" id="login-email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
		</div>
		<div className="input-group">
			<label htmlFor="login-password">Password</label>
			<input type="password" name="clave" id="login-password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button type="submit" className="sign">Sign in</button>
	</form>
	<div className="social-message">
		<div className="line"></div>
		<p className="message">Don't have an account?</p>
		<div className="line"></div>
	</div>
	
	
	<Link to="/signup">
		<span className="ms-2" href="#" role="button">
			Sign Up
		</span>
	</Link>
		
	
</div>
		
		</div>
	);
};

export default Login
