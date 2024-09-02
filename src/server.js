import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDOC from "../swagger.json" assert { type: "json" };
import { appPort } from "./env/envoriment.js";
import mailerRouter from "./mail/mail.router.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portifolio API",
      version: "1.0.0",
      description: "API for portifolio",
    },
    servers: [
      {
        url: `http://localhost:7000/api`,
      },
    ],
  },
  paths: {
    "/contact": {
      post: {
        summary: "Enviando email",
        description: "Enviando email",
        tags: ["Email"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Email",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Email enviado com sucesso",
          },
          400: {
            description: "Email não enviado",
          },
          500: {
            description: "Erro ao enviar email",
          },
        },
      },
    },
  },
  apis: ["./src/*.js"],
  components: {
    schemas: {
      Email: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

const specs = swaggerDOC(options);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/css"));
app.use("/", mailerRouter);

app.listen(appPort, () =>
  console.log(`Server running on port http://localhost:${appPort}/api`),
);
