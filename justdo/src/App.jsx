import React, {memo} from "react";
import { useState } from "react";

function App() {
  //const [name, setName] = useState("Dipsundar");

  return (
    <>
      <HeaderButton />
    </>
  );
}

function HeaderButton() {
  const [title, setTitle] = useState("Dipsundar");
  function updateName() {
    setTitle("My name is" + Math.random());
    // setName("He is a man" + "sAnu" );
  }

  return (
    <>
      <button onClick={updateName}>Click to change the title</button>
      <Header title={title}></Header>
      <Header title="Dipsundar"></Header>
    </>
  );
}



const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
