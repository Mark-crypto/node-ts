import winston from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const token = process.env.BETTER_STACK as string;
const logtail = new Logtail(token, {
  endpoint: "https://s1366084.eu-nbg-2.betterstackdata.com",
});

const { combine, timestamp, printf, json, prettyPrint, errors } =
  winston.format;

winston.loggers.add("orderLogger", {
  level: "debug",
  // format: winston.format.json(),
  format: combine(
    errors({ stack: true }),
    timestamp(),
    // printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    json(),
    prettyPrint()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "order.log" }),
    new LogtailTransport(logtail),
  ],
  defaultMeta: { service: "PaymentService" },
});

winston.loggers.add("paymentLogger", {
  format: json(),
  transports: [
    new winston.transports.File({ filename: "payment.log" }),
    new LogtailTransport(logtail),
  ],
  defaultMeta: { service: "PaymentService" },
});
