import "./App.css";
import Hello from "./Hello";
import Actor from "./Actor";

function App() {
  const actors = [
    { id: 1, firstName: "Brad", lastName: "Pitt", image: "" },
    { id: 2, firstName: "Ben", lastName: "Affleck", image: "" },
    { id: 3, firstName: "Michael", lastName: "Scott", image: "" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={"Mika"} username={"Miko"} />
        <Hello name={"Zach"} username={"Ez"} />
        <Actor actorsList={actors} />
      </header>
    </div>
  );
}

export default App;
