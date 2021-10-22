const Boton = ({
  texto,
  type,
  /* onclick, */ className,
  condicionDisabled,
}) => {
  return (
    <button
      type={type}
      // onClick={onclick}
      className={className}
      disabled={!condicionDisabled}
      /*  {condicionDisabled} */
    >
      {texto}
    </button>
  );
};

export default Boton;
