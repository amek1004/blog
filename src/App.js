import "./App.css";
import Nav from "./components/nav";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      <Nav />
      <h5>{post}</h5>
    </div>
  );
}

export default App;
