// import { useContext, useState } from "react";
// import FormularioContext from "../../../context/FormularioContext/FormularioContext";
import Boton from "../Boton";

const FormDatosPersonales = () => {
  // const { datosPersonales, setDatosPersonales } = useContext(FormularioContext);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="nombreUsuario" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombreUsuario"
          placeholder="Escribe aqui tu nombre"
          required
        />

        <label htmlFor="apellidoUsuario" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellidoUsuario"
          placeholder="Escribe aqui tu apellido"
          required
        />

        <label htmlFor="cumpleañosUsuario" className="form-label">
          Fecha de cumpleaños
        </label>
        <input
          type="date"
          className="form-control"
          id="cumpleañosUsuario"
          placeholder="Escribe aqui tu fecha de cumpleaños"
          required
        />

        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@ejemplo.com"
          required
        />
        <Boton
          type={"submit"}
          texto={"Siguiente"}
          className={"btn btn-dark"}
          onclick={() => console.log("holiiss")}
          condicionDisabled
        />
      </div>
    </>
  );
};

export default FormDatosPersonales;
