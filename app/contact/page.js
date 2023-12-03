import "./contact.css";
async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
}

async function Contact() {
  let data = await getData();
  return (
    <div>
      <h1 className="users">users</h1>
      <div className="user-item">
        {data?.map((user) => (
          <div className="user" key={user.id}>
            <span>{user.id}.</span>
            <p>{user.name}</p>
            <b>{user.username}</b>
            <small>{user.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
