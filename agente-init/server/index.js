import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express!');
});

// Levantar el servidor en el puerto 8080
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});


