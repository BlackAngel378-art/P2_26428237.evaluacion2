import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views')); // Asegúrate que apunta a tu carpeta views

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public'))); // Para archivos estáticos

// Configurar rutas
app.use('/', indexRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});