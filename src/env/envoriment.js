import dotenv from "dotenv";

dotenv.config();

export const appPort = process.env.APP_PORT || 3000;
export const mailerHost = process.env.MAILER_HOST || "smtp.gmail.com";
export const mailerPort = process.env.MAILER_PORT || 465;
export const mailerUser = process.env.MAILER_USERNAME || "Gmail";
export const mailerPass = process.env.MAILER_PASSWORD || "Gmail";
