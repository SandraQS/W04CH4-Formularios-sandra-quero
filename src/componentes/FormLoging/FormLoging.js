// import { useContext, useState } from "react";
// import FormularioContext from "../../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormLoging = () => {
  // const { datosPersonales, setDatosPersonales } = useContext(FormularioContext);
  const prueba = (evento) => {
    evento.preventDefault();
    console.log("holaaaaa");
  };

  return (
    <>
      <form
        className="form-datos-personales"
        onSubmit={(evento) => prueba(evento)}
      >
        <div className="mb-3">
          <label htmlFor="nombreUsuarioAcceso" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreUsuarioAcceso"
            placeholder="Escribe aqui tu nombre de usuario"
            required
          />

          <label htmlFor="contraseñAcceso" className="form-label">
            Contraseña
          </label>
          <input
            type="passwordAcceso"
            className="form-control"
            id="contraseñAcceso"
          />

          <label htmlFor="repite-contraseñaAcceso" className="form-label">
            Confirma la contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="repite-contraseñaAcceso"
          />

          <Boton
            type={"button"}
            texto={"Anterior"}
            className={"btn btn-light"}
            onclick={() => console.log("holiiss")}
            condicionDisabled
          />
          <Boton
            type={"submit"}
            texto={"Aceptar"}
            className={"btn btn-dark"}
            onclick={() => {}}
            condicionDisabled
          />
        </div>
      </form>
    </>
  );
};

export default FormLoging;
