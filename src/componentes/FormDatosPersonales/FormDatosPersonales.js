import { useContext } from "react";
import FormularioContext from "../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormDatosPersonales = () => {
  const { almacenarDatosPersonales, datosPersonales } =
    useContext(FormularioContext);
  const clickSiguiente = (evento) => {
    evento.preventDefault();
    console.log("holaaaaa");
  };

  return (
    <>
      <form
        className="form-datos-personales"
        onSubmit={(evento) => clickSiguiente(evento)}
      >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Escribe aqui tu nombre"
            onChange={(evento) => almacenarDatosPersonales(evento)}
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
            onChange={(evento) => almacenarDatosPersonales(evento)}
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
            onChange={(evento) => almacenarDatosPersonales(evento)}
            required
          />
          {datosPersonales.cumpleaños !== "" ? <p>30 años</p> : ""}

          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@ejemplo.com"
            onChange={(evento) => almacenarDatosPersonales(evento)}
            required
          />
          <Boton
            type={"submit"}
            texto={"Siguiente"}
            className={"btn btn-dark"}
            condicionDisabled={datosPersonales.completoDatos}
          />
        </div>
      </form>
    </>
  );
};

export default FormDatosPersonales;
