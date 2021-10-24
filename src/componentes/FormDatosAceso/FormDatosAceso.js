import { useContext } from "react";
import FormularioContext from "../../context/FormularioContext/FormularioContext";
import Boton from "../Boton/Boton";

const FormDatosAceso = () => {
  const { almacenarDatosUsuario, datosPersonales } =
    useContext(FormularioContext);
  const clickSiguiente = (evento) => {
    evento.preventDefault();
    if (datosPersonales.contraseña === datosPersonales.contraseñaRepetida) {
      // console.log("todo bieeen");
    } else {
      alert("Las contraseñas no son iguales");
    }
  };
  return (
    <>
      <form
        className="form-datos-personales"
        onSubmit={(evento) => clickSiguiente(evento)}
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
            onChange={(evento) => almacenarDatosUsuario(evento)}
            required
          />

          <label htmlFor="contraseña" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseña"
            onChange={(evento) => almacenarDatosUsuario(evento)}
            required
          />

          <label htmlFor="contraseñaRepetida" className="form-label">
            Confirma la contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseñaRepetida"
            onChange={(evento) => almacenarDatosUsuario(evento)}
            required
          />

          <Boton
            type={"button"}
            texto={"Anterior"}
            className={"btn btn-light"}
            onclick={() => {}}
            condicionDisabled
          />
          <Boton
            type={"submit"}
            texto={"Siguiente"}
            className={"btn btn-dark"}
            onclick={() => {}}
            condicionDisabled={datosPersonales.completoUsuario}
          />
        </div>
      </form>
    </>
  );
};

export default FormDatosAceso;
