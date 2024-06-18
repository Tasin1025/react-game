function ListGroup() {
  const cities = ["dhaka", "chittagong", "rajshahi", "sylhet", "barishal"];

  return (
    <>
      <h1>Hello</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
