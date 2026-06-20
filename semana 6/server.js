const express = require('express');
const app = express();

// Middleware indispensable para interceptar y entender objetos en formato JSON (req.body)
app.use(express.json());

// Ruta 1: Registro básico de usuarios/mensajes
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta 2: Simulación de Registro de Incidencias Comunitarias
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// Inicialización del servidor escuchando solicitudes en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});