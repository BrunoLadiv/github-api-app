import { useState } from "react";
import CardList from "./components/CardList.component";
import Form from "./components/Form.component";
import testData from "./data/user.data";
function App() {
  const [user, setUserState] = useState(testData)
 
  return (
    <>
      <Form/>
      <CardList users={user}/>
    </>
  );
}

export default App;
