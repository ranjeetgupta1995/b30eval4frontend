import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const payload = {
            email,
            password
        }

        fetch("https://fawn-wear.cyclic.app/users/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.token)
        })
        .then(err => console.log(err))
    }
  return (
    <div>
        <h1>Login From Here</h1>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
