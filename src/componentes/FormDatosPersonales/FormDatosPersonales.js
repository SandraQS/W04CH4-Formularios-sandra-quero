import { useContext } from "react";
import FormularioContext from "../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormDatosPersonales = () => {
  const { datosPersonales, setDatosPersonales } = useContext(FormularioContext);
  const clickSiguiente = (evento) => {
    evento.preventDefault();
    console.log("holaaaaa");
  };

  const almacenarDatos = (evento) => {
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
            onChange={(evento) => almacenarDatos(evento)}
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
            onChange={(evento) => almacenarDatos(evento)}
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
            onChange={(evento) => almacenarDatos(evento)}
            required
          />

          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@ejemplo.com"
            onChange={(evento) => almacenarDatos(evento)}
            required
          />
          <Boton
            type={"submit"}
            texto={"Siguiente"}
            className={"btn btn-dark"}
            condicionDisabled
          />
        </div>
      </form>
      <h2>{datosPersonales.nombre}</h2>
      <h2>{datosPersonales.apellido}</h2>
      <h2>{datosPersonales.cumpleaños}</h2>
      <h2>{datosPersonales.email}</h2>
    </>
  );
};

export default FormDatosPersonales;
