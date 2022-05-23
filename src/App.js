import "./App.css";
import Nav from "./components/nav";

function App() {
  let post = "Body line";

  return (
    <div className="App">
      <Nav />
      <h5>{post}</h5>
    </div>
  );
}

export default App;
