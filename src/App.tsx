import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const cities = ["dhaka", "chittagong", "rajshahi", "sylhet", "barishal"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button children="hyy" onClick={() => {console.log("ok");}} ></Button>
      <Alert>
        hello <span>world</span>
      </Alert>
      <ListGroup
        items={cities}
        heading="City Names"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
