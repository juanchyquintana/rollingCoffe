import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NuevoProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
  };

  return (
    <Container>
      <section className=" bg-white shadow rounded-5  p-3 my-4">
        <Form onSubmit={handleSubmit(productoValidado)}>
          <Form.Group className="mb-3">
            <Form.Label>Producto</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ej: Café" 
              {...register('nombreProducto', {
                required: "El Nombre del Producto es Obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre del producto debe tener como minimo 2 caracteres"
                },
                maxLength: {
                  value: 20,
                  message: "El nombre del producto debe tener como máximo 20 caracteres"
                }
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Ej: $50"
              {...register('precio', {
                required: "El Precio es Obligatorio",
                minLength: {
                  value: 2,
                  message: "El precio del producto debe tener como minimo 2 caracteres"
                },
                maxLength: {
                  value: 5,
                  message: "El precio del producto debe tener como máximo 5 caracteres"
                }
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>

          <Form.Group className="mb-3">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ej: https://www.pexels.com/es-es/foto/sillas-de-cuero-en-restaurante-2193600/"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select>
              <option>-- Seleccione una Opción --</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción Breve</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ej: Una taza de café suave y aromático"
              className="w-100"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción Amplia</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ej: El Café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático..."
              className="w-100"
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100 my-2 fw-bold"
          >
            Guardar
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default NuevoProducto;
