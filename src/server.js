import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocJSON from "../swagger.json" assert { type: "json" };
import { appPort } from "./env/envoriment.js";
import mailerRouter from "./mail/mail.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocJSON));
app.use(express.urlencoded({ extended: true }));
app.use("/", mailerRouter);

app.listen(appPort, () =>
  console.log(`Server running on port http://localhost:${appPort}/api`),
);
