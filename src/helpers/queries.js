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

const obtenerProductosAPI = async (id) => {
  try {
    const respuesta = await fetch(`${productosAPI}/${id}`);

    return respuesta;
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

const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${productosAPI}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin = {
  correo: "correo@correo.com",
  password: "deka2009",
};

const login = (usuario) => {
  if (
    usuario.correo === userAdmin.correo &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("adminKeyCoffe", JSON.stringify(usuario.correo));
    return true;
  } else {
    return false;
  }
};

export {
  leerProductosAPI,
  crearProducto,
  eliminarProducto,
  obtenerProductosAPI,
  editarProductoAPI,
  login,
};
