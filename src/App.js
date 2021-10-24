import { useState } from "react";
import "./App.css";
import FormDatosAceso from "./componentes/FormDatosAceso/FormDatosAceso";
import FormDatosPersonales from "./componentes/FormDatosPersonales/FormDatosPersonales";
import FormLoging from "./componentes/FormLoging/FormLoging";
import FormularioContext from "./context/FormularioContext/FormularioContext";

function App() {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    cumpleaños: "",
    email: "",
    completoDatos: false,
    nombreUsuario: "",
    contraseña: "",
    contraseñaRepetida: "",
    completoUsuario: false,
  });
  const [repetirDatos, setRepetirDatos] = useState({
    nombreUsuario: "",
    contraseña: "",
    contraseñaRepetida: "",
    recordarContraseña: false,
    completoRepetido: false,
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
        <FormDatosPersonales />
        <FormDatosAceso />
        <FormLoging />
      </FormularioContext.Provider>
      ;
    </>
  );
}

export default App;
