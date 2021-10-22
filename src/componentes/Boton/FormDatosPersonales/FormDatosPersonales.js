import { useState } from "react";
import Boton from "../Boton";

const FormDatosPersonales = () => {
  const [completo, setcompleto] = useState(true);

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
        />

        <label htmlFor="apellidoUsuario" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellidoUsuario"
          placeholder="Escribe aqui tu apellido"
        />

        <label htmlFor="cumpleañosUsuario" className="form-label">
          Fecha de cumpleaños
        </label>
        <input
          type="date"
          className="form-control"
          id="cumpleañosUsuario"
          placeholder="Escribe aqui tu fecha de cumpleaños"
        />

        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@ejemplo.com"
        />
      </div>

      <Boton
        texto={"Siguiente "}
        className={"btn btn-dark"}
        onclick={() => console.log("holiiss")}
        // condicionDisabled={completo ? `disabled` : ""}
      />
    </>
  );
};

export default FormDatosPersonales;
