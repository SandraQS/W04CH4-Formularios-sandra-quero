const Boton = ({ texto, onclick, className }) => {
  return (
    <button type="button" onClick={onclick} className={className}>
      {texto}
    </button>
  );
};

export default Boton;
