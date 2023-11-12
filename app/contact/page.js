async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
}

async function Contact() {
  let data = await getData();
  return (
    <div>
      <h1>users</h1>
      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
