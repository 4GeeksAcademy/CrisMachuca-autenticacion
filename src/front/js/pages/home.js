import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  Login from "./login";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			{store.auth == true ? <Navigate to="/private"/>: <Login />}
			
		</div>
	);
};
