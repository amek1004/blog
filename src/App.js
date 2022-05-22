import "./App.css";
import Nav from "./components/nav";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      <Nav />
      <h4>{post}</h4>
    </div>
  );
}

export default App;
