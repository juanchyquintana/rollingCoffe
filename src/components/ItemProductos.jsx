import { Link } from "react-router-dom";
import { eliminarProducto, leerProductosAPI } from "../helpers/queries.js";
import Swal from "sweetalert2";

const ItemProductos = ({ producto, setProductos}) => {
  const { nombreProducto, _id, precio, categoria, imagen } = producto;

  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarProducto(_id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado el producto: ${nombreProducto}`,
            icon: "success",
          });
        }
        
        const listadoProducto = await leerProductosAPI()
        setProductos(listadoProducto)
      } else {
        Swal.fire({
          title: "Ocurrió un Error",
          text: `El producto ${nombreProducto} no fue eliminado. Intenta nuevamente.`,
          icon: "error",
        });
      }
    });
  };

  return (
    <tr>
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
            <i className="bi bi-trash-fill" onClick={borrarProducto}></i>
          </button>
          <Link className="btn btn-warning" to={`/administrador/editar-producto/${_id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
