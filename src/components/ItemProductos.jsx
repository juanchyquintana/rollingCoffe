import { eliminarProducto } from "../helpers/queries.js";
import Swal from "sweetalert2";

const ItemProductos = ({ producto }) => {
  const { nombreProducto, id, precio, categoria, imagen } = producto;

  const borrarProducto = async () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        eliminarProducto(id);

        Swal.fire({
          title: "Eliminado",
          text: `Has eliminado el producto: ${nombreProducto}`,
          icon: "success"
        });
      }
    });
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreProducto}</td>
      <td>{precio}</td>
      <td>
        <img
          src={imagen}
          alt={`Esta es la imagen de ${nombreProducto}`}
          className="w-25 img-fluid"
        />
      </td>
      <td>{categoria}</td>
      <td>
        <div className="d-flex gap-2">
          <button className="btn btn-danger">
            <i 
              className="bi bi-trash-fill"
              onClick={borrarProducto}
            ></i>
          </button>
          <button className="btn btn-warning">
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
