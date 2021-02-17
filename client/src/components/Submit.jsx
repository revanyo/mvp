import axios from 'axios';
import React from 'react'
import { useState } from "react";

function Submit(props) {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null)
    const [entry, setEntry] = useState(null)

    function handleSubmit() {
        console.log('clicked')
        axios.post('/people', {
            name: firstName+ ' ' + lastName,
            entry: entry
        });
    };

    return (
        <div className="homeDiv">
            <div>
                <form>
                    <input type='text' placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                    <input type='text' placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                    <input type="text" placeholder="Entry" onChange={(e) => setEntry(e.target.value)}></input>
                    <input className="submitButton" type="submit" onClick={() => { handleSubmit()}}></input>
                </form>
            </div>
        </div>
    )
}

export default Submit;