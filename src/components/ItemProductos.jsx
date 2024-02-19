const ItemProductos = ({ producto }) => {
  const { nombreProducto, id, precio, categoria, imagen } = producto;

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
            <i className="bi bi-trash-fill"></i>
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
