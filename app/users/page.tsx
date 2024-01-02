interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="users-page">
      <p>Users</p>
      {users.map((user, idx) => (
        <li key={idx}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersPage;
