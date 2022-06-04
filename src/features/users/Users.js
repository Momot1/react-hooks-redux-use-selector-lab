import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector(state => state.users)

  const userCount = useSelector(state => state.users.length)

  const usernames = users.map(user => <li key={user.username}>{user.username}</li>)

  return (
    <div>
      <ul>
        Users!
        {users.length > 0 ? <>{usernames}
        <li>
          Total Users: {userCount}  
        </li></> : null}
        
      </ul>
    </div>
  );
}

export default Users;
