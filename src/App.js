import { useState } from "react";
import "./App.css";
import FormDatosAceso from "./componentes/FormDatosAceso/FormDatosAceso";
import FormDatosPersonales from "./componentes/FormDatosPersonales/FormDatosPersonales";
import FormularioContext from "./context/FormularioContext/FormularioContext";

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
      <FormularioContext.Provider
        value={{
          datosPersonales,
          setDatosPersonales,
          repetirDatos,
          setRepetirDatos,
        }}
      >
        <form className="form-datos-personales">
          <FormDatosPersonales />
        </form>
        <form className="form-datos-personales">
          <FormDatosAceso />
        </form>
      </FormularioContext.Provider>
      ;
    </>
  );
}

export default App;
