import dotenv from "dotenv";

dotenv.config();

export const appPort = process.env.APP_PORT || 3000;
export const mailerHost = process.env.MAILER_HOST;
export const mailerPort = +process.env.MAILER_PORT;
export const mailerUser = process.env.MAILER_USERNAME;
export const mailerPass = process.env.MAILER_PASSWORD;
