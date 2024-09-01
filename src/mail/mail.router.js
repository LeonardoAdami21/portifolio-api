import express from "express";
import { mailController } from "./mail.controller.js";
const mailerRouter = express.Router();

mailerRouter.post("/contact", mailController.sendEmail);

export default mailerRouter;
