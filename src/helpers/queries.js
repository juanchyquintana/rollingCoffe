const productosAPI = import.meta.env.VITE_API_PRODUCTO;

const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(productosAPI);
    const resultado = await respuesta.json();

    return resultado;
  } catch (error) {
    console.log(error);
  }
};

const crearProducto = async (datos) => {
  try {
    const respuesta = await fetch(productosAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${productosAPI}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { leerProductosAPI, crearProducto, eliminarProducto };
