import Columna from "./Columna";
import Fila from "./Fila";

function Tabla() {

  return (
    <table>
      <thead>
        <tr>
          <Columna titulo="Nombre" />
          <Columna titulo="Edad" />
          <Columna titulo="Parentesco" />
        </tr>
      </thead>
      <tbody>
          <Fila nombre="Jaime" edad="65" parentesco="Padre"/>
          <Fila nombre="Rocio" edad="57" parentesco="Madre"/>
          <Fila nombre="Nicolás" edad="23" parentesco="Hermano"/>
          <Fila nombre="Vanessa" edad="21" parentesco="Hermana"/>
      </tbody>
    </table>
  );

}

export default Tabla;