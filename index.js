"use strict";

require("dotenv").config();
import { ReportGeneratorTR } from "./tr";
import { createReportData as createReportDataDR } from "./dr";

const Hapi = require("@hapi/hapi");

const serverName = process.env.SERVER_NAME || "localhost";
const port = process.env.PORT || 3000;

function queryToContextObj(query) {
  let customerId = query.customer_id || "";
  let requestorId = query.requestor_id || "";
  let platform = query.platform || customerId || "Sashimi test platform";
  return {
    customerId,
    requestorId,
    platform,
  };
}

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
      let context = queryToContextObj(request.query);
      let monthStart = request.query.begin_date || "2020-01";
      let monthEnd = request.query.end_date || monthStart;
      let generator = new ReportGeneratorTR(context);
      return generator.createReportData(monthStart, monthEnd);
    },
  });

  server.route({
    method: "GET",
    path: "/reports/dr",
    handler: (request, h) => {
      console.info("New DR request", request.query);
      let monthStart = request.query.begin_date || "2020-01";
      let monthEnd = request.query.end_date || monthStart;
      let context = queryToContextObj(request.query);
      return createReportDataDR(monthStart, monthEnd, context);
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
