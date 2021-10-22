const Boton = ({ texto, onclick, className /* condicionDisabled */ }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={className}
      /*  {condicionDisabled} */
    >
      {texto}
    </button>
  );
};

export default Boton;
