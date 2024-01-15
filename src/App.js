import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString(), college: uCollege }
      ]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
