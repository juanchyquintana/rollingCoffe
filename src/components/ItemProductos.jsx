import cafeAmericano from "../assets/cafeAmericano.jpeg";

const ItemProductos = () => {
  return (
    <tr>
      <td>1</td>
      <td>Café Americano</td>
      <td>$250</td>
      <td>
        <img
          src={cafeAmericano}
          alt="Café Americano"
          className="w-25 img-fluid"
        />
      </td>
      <td>Bebida Caliente</td>
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
