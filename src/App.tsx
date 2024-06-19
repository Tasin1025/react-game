import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {
  const [cartItems, setCartItems] = useState(['product1','product2','product3'])
  const cities = ["dhaka", "chittagong", "rajshahi", "sylhet", "barishal"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);
  const [counter, setCount] = useState({
    name: 'a',
    count: 5
  })

  const handleCount = () => {
    counter.count < 10 ? setCount({...counter,count: counter.count+1}) : setCount({...counter,count:0});
  }

  return (
    <div>
      <NavBar cartItemsNumber={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      <button onClick={handleCount} >Count is {counter.count}</button>
      <Button text="Press me" onClick2={() => setAlertVisibility(true)}></Button>
      {alertVisibility && (
        <Alert onClose={() => {setAlertVisibility(false)}}>
          hello <span>world</span>
        </Alert>
      )}
      <ListGroup
        items={cities}
        heading="City Names"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
