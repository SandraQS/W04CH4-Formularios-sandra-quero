// import { useContext, useState } from "react";
// import FormularioContext from "../../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormDatosAceso = () => {
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
          <label htmlFor="nombreUsuario" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreUsuario"
            placeholder="Escribe aqui tu nombre de usuario"
            required
          />

          <label htmlFor="contraseña" className="form-label">
            Contraseña
          </label>
          <input type="password" className="form-control" id="contraseña" />

          <label htmlFor="repite-contraseña" className="form-label">
            Confirma la contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="repite-contraseña"
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
            texto={"Siguiente"}
            className={"btn btn-dark"}
            onclick={() => {}}
            condicionDisabled
          />
        </div>
      </form>
    </>
  );
};

export default FormDatosAceso;
