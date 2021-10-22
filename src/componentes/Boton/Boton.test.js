import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Boton from "./Boton";

describe("Dado el componente Boton", () => {
  describe("Cuando recibe un texto 'hola'", () => {
    test("Entonces debería renderizar un botón con el texto 'hola", () => {
      const texto = "hola";

      render(<Boton texto={texto} />);

      const textoBoton = screen.getByText(texto);
      expect(textoBoton).toBeInTheDocument();
    });
  });

  describe("Cuando recibe una funcion", () => {
    test("Entonces debería ejecutarla al hacer click", () => {
      const texto = "hola";
      const funcionClick = jest.fn();

      render(<Boton texto={texto} funcionClick={funcionClick} />);

      const textoBoton = screen.getByText(texto);
      userEvent.click(textoBoton);

      expect(funcionClick).toHaveBeenCalled();
      jest.debug();
    });
  });
});
