import React, { useState} from 'react';
import api from '../../services/api';


export default function Login({history}) {

    const [email, setEmail] = useState('');

        async function handleSubmit (event) {

            event.preventDefault();
            console.log(email);

            const response = await api.post('/sessions', {email});

            const { _id} = response.data;

            localStorage.setItem('user', _id);

            console.log(response);
            console.log( _id);

            history.push('/dashboard');
        }

    return (

        <React.Fragment>
            <p>
            Offer <strong>spots</strong> for programers and find new talents
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            <input 
                type="email" 
                id="email" 
                placeholder="type your email" 
                value={email}
                onChange={event=> setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Go</button>
            </form>
        </React.Fragment>
    )
}