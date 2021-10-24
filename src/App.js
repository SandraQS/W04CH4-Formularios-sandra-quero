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

  const almacenarDatosPersonales = (evento) => {
    console.log(evento.target.value);
    setDatosPersonales({
      ...datosPersonales,
      [evento.target.id]: evento.target.value,
      completoDatos:
        datosPersonales.nombre !== "" &&
        datosPersonales.apellido !== "" &&
        datosPersonales.cumpleaños !== "" &&
        datosPersonales.email !== ""
          ? true
          : false,
    });
    return datosPersonales;
  };

  const almacenarDatosUsuario = (evento) => {
    console.log(evento.target.value);
    setDatosPersonales({
      ...datosPersonales,
      [evento.target.id]: evento.target.value,
      completoUsuario:
        datosPersonales.contraseña !== "" &&
        datosPersonales.contraseñaRepetida !== "" &&
        datosPersonales.nombreUsuario !== ""
          ? true
          : false,
    });
    console.log(datosPersonales);
  };

  return (
    <>
      <FormularioContext.Provider
        value={{
          datosPersonales,
          setDatosPersonales,
          repetirDatos,
          setRepetirDatos,
          almacenarDatosPersonales,
          almacenarDatosUsuario,
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
