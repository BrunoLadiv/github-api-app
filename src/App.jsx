import { useState } from "react";
import CardList from "./components/CardList.component";
import Form from "./components/Form.component";

function App() {
  const stateTest = {
    user:[]
  }
  const [user, setUserState] = useState(stateTest);
  const newProfile = (ProfileData) => {
    // console.log(data)
    setUserState(prevState => ({
      user: [...prevState.user,ProfileData]
    }));
  };

  return (
    <>
      <Form onSubmit={newProfile} />
      <CardList user={user} />
    </>
  );
}

export default App;
