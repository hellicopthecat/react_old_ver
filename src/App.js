import React from "react";

function Food(props) {
  return <h1>I'm a {props.more}</h1>;
}
function Drinks({what}) {
  return <h1>I'm a {what}</h1>;
}
function Whatmatch({match, whatdrink}) {
  return (
    <div>
      <h1>
        {match} && {whatdrink}
      </h1>
    </div>
  );
}
const foodList = [
  {name: "chicken", with: "beer"},
  {name: "row Fish", with: "soju"},
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food more="cheese" />
      <Drinks what="coffee" />
      {foodList.map((current) => (
        <Whatmatch match={current.name} whatdrink={current.with} />
      ))}
    </div>
  );
}

export default App;
