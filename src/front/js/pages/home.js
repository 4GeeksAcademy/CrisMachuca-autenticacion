import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  Login from "./login";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        const verifyToken = async () => {
            await actions.verifyToken();
            setLoading(false);
        };
        if (loading) {
            verifyToken();
        }
    }, [loading, actions]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (store.auth) {
        return <Navigate to="/private" />;
    }

    return (
        <div className="text-center mt-5">
            <h1>Home</h1>
            <Login />
        </div>
    );
};
