import { Table } from "react-bootstrap";
import ItemProductos from "./ItemProductos";

const TablaAdministrador = () => {
  return (
    <section>
      <Table responsive>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Productos</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody>
          <ItemProductos />
        </tbody>
      </Table>
    </section>
  );
};

export default TablaAdministrador;
