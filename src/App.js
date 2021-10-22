import { useState } from "react";
import "./App.css";
import FormDatosPersonales from "./componentes/Boton/FormDatosPersonales/FormDatosPersonales";
import FormularioContext from "./context/FormularioContext";

function App() {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    cumpleaños: "",
    email: "",
    nombreUsuario: "",
    contraseña: "",
    contraseñaRepetida: "",
    completo: false,
  });
  const [repetirDatos, setRepetirDatos] = useState({
    nombreUsuario: "",
    contraseña: "",
    contraseñaRepetida: "",
    recordarContraseña: false,
  });

  return (
    <>
      <FormularioContext.Provider value={{}}>
        <form className="form-datos-personales">
          <FormDatosPersonales />
        </form>
      </FormularioContext.Provider>
      ;
    </>
  );
}

export default App;
