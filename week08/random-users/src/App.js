import { useEffect, useState } from 'react';
import './App.css';

import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => { 
    fetch('https://randomuser.me/api/?results=4', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => setUsers(data.results))
  }, [])

  const revealUsers = () => setReveal(!reveal);

  return (
    <div className='wrapper'>
      <h1>Random users</h1>
      <button onClick={revealUsers}>Get users</button>
      <div className="user-card-container">
        {reveal ? users.map((user) =>
          <UserCard user={user}/>
        ) : null}
      </div>
    </div>
  );
}

export default App;