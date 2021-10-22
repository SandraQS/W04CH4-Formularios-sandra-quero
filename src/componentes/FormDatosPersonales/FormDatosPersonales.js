// import { useContext, useState } from "react";
// import FormularioContext from "../../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormDatosPersonales = () => {
  // const { datosPersonales, setDatosPersonales } = useContext(FormularioContext);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Escribe aqui tu nombre"
          required
        />

        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Escribe aqui tu apellido"
          required
        />

        <label htmlFor="cumpleaños" className="form-label">
          Fecha de cumpleaños
        </label>
        <input
          type="date"
          className="form-control"
          id="cumpleaños"
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
          onclick={() => {}}
          condicionDisabled
        />
      </div>
    </>
  );
};

export default FormDatosPersonales;
