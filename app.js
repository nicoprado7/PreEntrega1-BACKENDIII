import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import { errorHandle } from "./errors/errHandle.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Conexión a MongoDB con manejo de éxito y error
mongoose.connect(`mongodb://localhost:27017/clase-6`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB correctamente"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

// Iniciar el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
