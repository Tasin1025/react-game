import ListGroup from './components/ListGroup'

function App () {
  const cities = ["dhaka", "chittagong", "rajshahi", "sylhet", "barishal"];
  return <div>

    <ListGroup items={cities} heading='City Names'/>
  </div>
}

export default App;