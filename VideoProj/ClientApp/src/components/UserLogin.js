import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export const UserLogin = () => {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");
    const [response, setResponse] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/users/1');
                const json = await response.json();
                console.log(response);
                setUser(json);
                setSuccess(true)

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("above fetch");
        const res = await fetch('/api/Users');
        console.log(res)
        const data = await res.json();
        if (data.password === { password }) {
            setSuccess(true)
            console.log(data)
        }


        setEmail('');
        setPassword('');

    }


    const handleRegister = (e) => {
        const res = axios.post('api/users', e);
        setResponse(res);
    }

    return (
        <>
            {success ? (
              

                <section>
                    <h4> Welcome {user.email}</h4>
                    <br />
                </section>
            ) : (
                <form>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" id="email" style={{ width: "120px", height: "30px" }}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" id="password" style={{ width: "120px", height: "30px" }}></input>&nbsp;&nbsp;&nbsp;&nbsp;

                    <Button.Group style={{ filter: "drop-shadow(4px 4px 1px #000000)" }} >
                        <Button onClick={handleLogin} style={{ width: "70px", height: "30px", padding: 0 }}>Login</Button>

                        <Button onClick={handleRegister} style={{ width: "70px", height: "30px", padding: 0 }}>Register</Button>
                    </Button.Group>

                </form>
            )}
        </>
    )



}