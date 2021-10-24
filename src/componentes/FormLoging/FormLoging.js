import { useContext } from "react";
import FormularioContext from "../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormLoging = () => {
  const {
    datosPersonales,
    repetirDatos,
    almacenarDatosLogin,
    siguientePagina,
    paginaAnterior,
  } = useContext(FormularioContext);

  const clickAceptar = (evento) => {
    evento.preventDefault();
    if (
      datosPersonales.contraseña === repetirDatos.contraseñaLogin &&
      datosPersonales.nombreUsuario === repetirDatos.nombreUsuarioLogin
    ) {
      siguientePagina();
    } else {
      alert("Los datos no coinciden");
    }
  };

  return (
    <>
      <form
        className="form-datos-personales"
        onSubmit={(evento) => clickAceptar(evento)}
      >
        <div className="mb-3">
          <label htmlFor="nombreUsuarioLogin" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreUsuarioLogin"
            placeholder="Escribe aqui tu nombre de usuario"
            onChange={(evento) => almacenarDatosLogin(evento)}
            required
          />

          <label htmlFor="contraseñaLogin" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseñaLogin"
            onChange={(evento) => almacenarDatosLogin(evento)}
            required
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="recordarContraseña"
            />
            <label className="form-check-label" htmlFor="recordarContraseña">
              Recordar la contraseña
            </label>
          </div>
          <Boton
            type={"button"}
            texto={"Anterior"}
            className={"btn btn-light"}
            onclick={(evento) => {
              paginaAnterior(evento);
            }}
            condicionDisabled
          />
          <Boton
            type={"submit"}
            texto={"Aceptar"}
            className={"btn btn-dark"}
            onclick={() => {}}
            condicionDisabled={repetirDatos.completoRepetido}
          />
        </div>
      </form>
    </>
  );
};

export default FormLoging;
