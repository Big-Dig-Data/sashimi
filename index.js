"use strict";

require("dotenv").config();
import { createReportData as createReportDataTR } from "./tr";
import { createReportData as createReportDataDR } from "./dr";

const Hapi = require("@hapi/hapi");

const serverName = process.env.SERVER_NAME || "localhost";
const port = process.env.PORT || 3000;

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: serverName,
  });

  server.route({
    method: "GET",
    path: "/reports/tr",
    handler: (request, h) => {
      console.info("New TR request", request.query);
      let monthStart =
        "begin_date" in request.query ? request.query.begin_date : "2020-01";
      let monthEnd =
        "end_date" in request.query ? request.query.end_date : monthStart;
      let requestorId =
        "requestor_id" in request.query ? request.query.requestor_id : "";
      let customerId =
        "customer_id" in request.query ? request.query.customer_id : "";
      return createReportDataTR(monthStart, monthEnd, customerId, [
        requestorId,
        customerId,
      ]);
    },
  });

  server.route({
    method: "GET",
    path: "/reports/dr",
    handler: (request, h) => {
      console.info("New DR request", request.query);
      let monthStart =
        "begin_date" in request.query ? request.query.begin_date : "2020-01";
      let monthEnd =
        "end_date" in request.query ? request.query.end_date : monthStart;
      let requestorId =
        "requestor_id" in request.query ? request.query.requestor_id : "";
      let customerId =
        "customer_id" in request.query ? request.query.customer_id : "";
      return createReportDataDR(monthStart, monthEnd, customerId, [
        requestorId,
        customerId,
      ]);
    },
  });

  server.route({
    method: "GET",
    path: "/reports",
    handler: (request, h) => {
      return { message: "not supported yet, try /reports/tr" };
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return {
        message:
          'This is a fake SUSHI server "sashimi". Use /reports/tr or /reports/dr to ' +
          "get sample data. Read more at https://github.com/Big-Dig-Data/sashimi",
      };
    },
  });

  server.route({
    method: "GET",
    path: "/{any*}",
    handler: (request, h) => {
      return h
        .response(
          "Sorry, this page does not exist. Try /reports/tr or /reports/dr. More info at " +
            "https://github.com/Big-Dig-Data/sashimi"
        )
        .code(404)
        .type("text/plain");
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
