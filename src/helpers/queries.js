const productosAPI = import.meta.env.VITE_API_PRODUCTO;

const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(productosAPI);
    const resultado = await respuesta.json();
    console.log(resultado);

    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export { leerProductosAPI };
