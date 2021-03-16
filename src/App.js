import React, {useState} from 'react';
import UserTable from './componentes/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/AddUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    { id: uuidv4(), name: 'Lupita', username: 'lupita_00'}
  ]

  //Nota simpre que usemos useState hay que ver que se este agregando en la lib de react
  const [users, setUsers] = useState(usersData);
  
  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    //Condicion para sobre escribir el arreglo
    setUsers(users.filter(user => user.id != id))
  }

  return (
    <div className="container">
      <h1>Proyecto CRUD</h1>
      <div className="flex-row">
      <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
