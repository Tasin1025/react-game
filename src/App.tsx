import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const cities = ["dhaka", "chittagong", "rajshahi", "sylhet", "barishal"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <Button children="hyy" onClick2={() => setAlertVisibility(true)}></Button>
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
