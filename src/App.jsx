import { useEffect } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  useEffect(() => {
    document.title = "Tic Tac Toe";
  }, []);

  return (
    <>
      <h2 style={{ color: "#fff" }}>Tic Tac Toe</h2>
      <Grid numberOfCards={9} />
    </>
  );
}

export default App;
