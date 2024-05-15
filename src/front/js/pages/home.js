import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import Login from "./login";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(true); // Variable para controlar si el componente está montado

    useEffect(() => {
        const verifyToken = async () => {
            await actions.verifyToken();
            if (mounted) { // Verificar si el componente está montado antes de actualizar el estado
                setLoading(false);
            }
        };

        if (loading) {
            verifyToken();
        }

        // Función de limpieza para actualizar el estado de 'mounted' cuando el componente se desmonta
        return () => {
            setMounted(false);
        };
    }, [loading, actions, mounted]);

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
