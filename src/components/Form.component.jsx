import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [text, setText] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${text}`);
    // console.log(resp.data)
    props.onSubmit(resp.data)
    
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input value={text} onChange={e=>setText(e.target.value)} required type="text" placeholder="Github username" />
      <button>Add card</button>
    </form>
  );
};

export default Form;
