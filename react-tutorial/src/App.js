import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .then(err => err);

  }, [])

  const mainContainer = {
    display: 'flex',
    // width: '100%',
    height: '100vh',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }

  const [member, setMember] = useState([])

  const addMember = (name) => {
    setMember([...member, name])
  }
  

  return (
    
    <div style={mainContainer}>
      <ul style= {{width: '100%', height: 'auto'}}>
        {
          member.map(member => <li>{member}</li>)
        }
      </ul>
      
      {
        users.map(user => <User user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
