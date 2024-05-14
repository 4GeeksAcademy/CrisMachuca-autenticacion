import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Private = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center gap-3 p-4">
			<div className="form-container">
	<p className="title">This is your private area</p>
    <p className="title">Profile</p>
	<div className="container bg-primary">
		
	<p className="signup">Do you want to exit?
        <Link to="/">
		    <button rel="noopener noreferrer" href="#" className="btn btn-warning"> Log Out</button>
        </Link>
	</p>
	</div>
	
	
	
</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Private.propTypes = {
	match: PropTypes.object
};
