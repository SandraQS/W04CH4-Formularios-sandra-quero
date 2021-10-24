import { useState } from "react";
import "./App.css";
import FormDatosAceso from "./componentes/FormDatosAceso/FormDatosAceso";
import FormDatosPersonales from "./componentes/FormDatosPersonales/FormDatosPersonales";
import FormLoging from "./componentes/FormLoging/FormLoging";
import InfoUsuario from "./componentes/InfoUsuario/InfoUsuario";
import FormularioContext from "./context/FormularioContext/FormularioContext";

function App() {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    cumpleanyos: "",
    email: "",
    completoDatos: false,
    nombreUsuario: "",
    contraseña: "",
    contraseñaRepetida: "",
    completoUsuario: false,
    formularioAcabado: false,
  });
  const [repetirDatos, setRepetirDatos] = useState({
    nombreUsuarioLogin: "",
    contraseñaLogin: "",
    contraseñaRepetidaLogin: "",
    recordarContraseñaLogin: false,
    completoRepetido: false,
  });
  const [pagina, setPagina] = useState(1);

  const siguientePagina = () => {
    setPagina(pagina + 1);
    return pagina;
  };

  const paginaAnterior = (evento) => {
    evento.preventDefault();
    setPagina(pagina - 1);
    return pagina;
  };

  const almacenarDatosPersonales = (evento) => {
    setDatosPersonales({
      ...datosPersonales,
      [evento.target.id]: evento.target.value,
      completoDatos:
        datosPersonales.nombre !== "" &&
        datosPersonales.apellido !== "" &&
        datosPersonales.cumpleanyos !== "" &&
        datosPersonales.email !== ""
          ? true
          : false,
    });
    return datosPersonales;
  };

  const almacenarDatosUsuario = (evento) => {
    setDatosPersonales({
      ...datosPersonales,
      [evento.target.id]: evento.target.value,
      completoUsuario:
        datosPersonales.contraseña !== "" &&
        datosPersonales.contraseñaRepetida !== "" &&
        datosPersonales.nombreUsuarioLogin !== ""
          ? true
          : false,
    });
    return datosPersonales;
  };

  const almacenarDatosLogin = (evento) => {
    setRepetirDatos({
      ...repetirDatos,
      [evento.target.id]: evento.target.value,
      completoRepetido:
        repetirDatos.contraseñaLogin !== "" &&
        repetirDatos.nombreUsuarioLogin !== ""
          ? true
          : false,
    });
    return repetirDatos;
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
          almacenarDatosLogin,
          siguientePagina,
          paginaAnterior,
          setPagina,
        }}
      >
        {pagina === 1 ? <FormDatosPersonales /> : ""}
        {pagina === 2 ? <FormDatosAceso /> : ""}
        {pagina === 3 ? <FormLoging /> : ""}
        {pagina === 4 ? <InfoUsuario /> : ""}
      </FormularioContext.Provider>
    </>
  );
}

export default App;
