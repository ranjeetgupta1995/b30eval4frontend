import React, { useState } from 'react'

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0)
    const [city, setCity] = useState("");
    const [isMarried, setIsMarried] = useState("");

    const handleRegister = () => {
        const payload = {
            name,
            email,
            gender,
            password,
            age,
            city,
            isMarried
        }

        fetch("https://fawn-wear.cyclic.app/users/register", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(err => console.log(err))
    }
  return (
    <div>
        <h1>Register From Here</h1>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Gender </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <br />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type='number' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type='text' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        <br />
        <label>Is married </label>
        <select value={isMarried} onChange={(e) => setIsMarried(e.target.value)} >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br />
        <button onClick={handleRegister}>Register</button>
    </div>
  )
}
