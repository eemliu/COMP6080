import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25', {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setUsers(data.results));
  }, [])

  console.log(users);

  const revealUsers = () => setReveal(!reveal);
  return (
    <div className='wrapper'>
      <h1>Random user list</h1>
      <button onClick={revealUsers}>Get random users</button>
      <div className="user-card-container">
        {reveal ? users.map((user) =>
          <UserCard user={user} />)
          : null}
      </div>
    </div>
  );
}

export default App;