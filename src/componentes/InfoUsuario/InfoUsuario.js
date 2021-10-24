import { useContext } from "react/cjs/react.development";
import FormularioContext from "../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const InfoUsuario = () => {
  const {
    datosPersonales,
    paginaAnterior,
    setDatosPersonales,
    setRepetirDatos,
    setPagina,
  } = useContext(FormularioContext);

  const clickReset = () => {
    setDatosPersonales({
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

    setRepetirDatos({
      nombreUsuarioLogin: "",
      contraseñaLogin: "",
      contraseñaRepetidaLogin: "",
      recordarContraseñaLogin: false,
      completoRepetido: false,
    });
    setPagina(1);
  };
  return (
    <>
      <h2>
        Hola {datosPersonales.nombre} {datosPersonales.apellido}
      </h2>
      <ul>
        <li>Tu nombre de usuario es: {datosPersonales.nombreUsuario}</li>
        <li>Tu contraseña es: {datosPersonales.contraseña}</li>
        <li>Tu fecha de cumpleaños es: {datosPersonales.cumpleanyos}</li>
      </ul>

      <Boton
        type={"button"}
        texto={"Anterior"}
        className={"btn btn-outline-dark"}
        onclick={(evento) => {
          paginaAnterior(evento);
        }}
        condicionDisabled
      />

      <Boton
        type={"button"}
        texto={"Eliminar cuenta"}
        className={"btn btn-danger"}
        onclick={clickReset}
        condicionDisabled
      />
    </>
  );
};

export default InfoUsuario;
