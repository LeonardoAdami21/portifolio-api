import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDOC from "../swagger.json" assert { type: "json" };
import { appPort } from "./env/envoriment.js";
import mailerRouter from "./mail/mail.router.js";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDOC, { cssUrl: CSS_URL }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", mailerRouter);

app.listen(appPort, () =>
  console.log(`Server running on port http://localhost:${appPort}/api`),
);
