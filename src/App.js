import Boton from "./componentes/Boton/Boton";
import "./App.css";

function App() {
  return (
    <Boton
      texto={"hola"}
      className={"btn btn-dark"}
      onclick={() => console.log("holiiss")}
    />
  );
}

export default App;
