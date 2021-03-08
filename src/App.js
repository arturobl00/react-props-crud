import React, {useState} from 'react';
import UserTable from './componentes/UserTable';


function App() {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
    { id: 4, name: 'Lupita', username: 'lupita_00'}
  ]

  //Nota simpre que usemos useState hay que ver que se este agregando en la lib de react
  const [users, setUsers] = useState(usersData);
  

  return (
    <div className="container">
      <h1>Proyecto CRUD</h1>
      <div className="flex-row">
      <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
