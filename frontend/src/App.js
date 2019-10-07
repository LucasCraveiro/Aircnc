import React, {useState} from 'react';
import api from './services/api';
import './App.css';
// eslint-disable-next-line
import logo from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit (event) {

    event.preventDefault();
    console.log(email);

    const response = await api.post('/sessions', {email});

    const { _id} = response.data;

    localStorage.setItem('user', _id);
    
    console.log(response);
    console.log( _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="Aircnc" />

      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
