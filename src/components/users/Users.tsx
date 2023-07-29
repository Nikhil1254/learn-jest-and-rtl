import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => setError("Error fetching users!"));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((person: any, idx) => {
          return <li>{person?.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
