const express = require('express');
const cors = require('cors');
const db = require('./db'); // Importamos la conexión a MySQL

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar datos en formato JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



app.get('/lugares', (req, res) => {
    const query = 'SELECT * FROM turismo';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener lugares:', err.message);
        res.status(500).send('Error al obtener lugares');
      } else {
        res.json(results);
      }
    });
  });

  //GET
  app.get('/lugares/:id', (req, res) => {
    const { id } = req.params; 
    const query = 'SELECT * FROM turismo WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener lugar:', err.message);
            res.status(500).json({ error: 'Error al obtener lugar' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Lugar no encontrado' });
        } else {
            res.json(results[0]);
        }
    });
});

  
// POST
app.post('/lugares', (req, res) => {
    const { nombre, ubicacion, descripcion, imagen } = req.body;
    const query = 'INSERT INTO turismo (nombre, ubicacion, descripcion, imagen) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, ubicacion, descripcion, imagen], (err, result) => {
      if (err) {
        console.error('Error al agregar lugar:', err.message);
        res.status(500).send('Error al agregar lugar');
      } else {
        res.status(201).send('Lugar agregado correctamente');
      }
    });
});

// PUT
app.put('/lugares/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, ubicacion, descripcion, imagen } = req.body;
    const query = 'UPDATE turismo SET nombre = ?, ubicacion = ?, descripcion = ?, imagen = ? WHERE id = ?';
    db.query(query, [nombre, ubicacion, descripcion, imagen, id], (err, result) => {
      if (err) {
        console.error('Error al actualizar lugar:', err.message);
        res.status(500).send('Error al actualizar lugar');
      } else {
        res.send('Lugar actualizado correctamente');
      }
    });
});

// DELETE

app.delete('/lugares/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM turismo WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar lugar:', err.message);
        res.status(500).send('Error al eliminar lugar');
      } else {
        res.send('Lugar eliminado correctamente');
      }
    });
});
  
 
  