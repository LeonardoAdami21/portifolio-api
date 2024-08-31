import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDOC from "../swagger.json" assert { type: "json" };

const app = express();

app.use(express.json());
app.use(cors());