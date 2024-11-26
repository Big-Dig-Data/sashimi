"use strict";

import { ReportGeneratorR51TR } from "./r51/tr";

require("dotenv").config();
import { ReportGeneratorR50TR } from "./r50/tr";
import { ReportGeneratorR50DR } from "./r50/dr";
import { parseMonthToDate, startOfMonthStr } from "./lib/dates";
import { ReportGeneratorR51DR } from "./r51/dr";
import { addMonths } from "date-fns";
import endOfMonth from "date-fns/endOfMonth";
import { parseConfig } from "./lib/config";

const Hapi = require("@hapi/hapi");

const serverName = process.env.SERVER_NAME || "localhost";
const port = process.env.PORT || 3000;

function queryToContextObj(query) {
  let customerId = query.customer_id || "foo";
  let requestorId = query.requestor_id || "";
  let platform = query.platform || customerId || "Sashimi test platform";
  let apiKey = query.api_key || "";
  return {
    customerId,
    requestorId,
    platform,
    attributesToShow: (query.attributes_to_show || "").split("|"),
    config: parseConfig(apiKey),
  };
}

function handleRequest(h, query, generatorClass) {
  let monthStart =
    query.begin_date || startOfMonthStr(addMonths(new Date(), -1));
  let monthEnd = query.end_date || monthStart;
  let context = queryToContextObj(query);
  console.info("Context", context);
  let generator = new generatorClass(context);
  // some basic checks
  let startDate = parseMonthToDate(monthStart);
  let endDate = endOfMonth(parseMonthToDate(monthEnd));
  if (startDate > endDate) {
    return h
      .response({
        message: "Begin date cannot be after end date",
      })
      .code(400);
  }
  let out = generator.createReportData(startDate, endDate);
  const respCode = context.config.response_code
    ? parseInt(context.config.response_code)
    : 200;
  return h.response(out).code(respCode);
}

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: serverName,
  });

  // COP 5.0
  server.route({
    method: "GET",
    path: "/reports/tr",
    handler: (request, h) => {
      console.info("New TR 5.0 request", request.query);
      return handleRequest(h, request.query, ReportGeneratorR50TR);
    },
  });

  server.route({
    method: "GET",
    path: "/reports/dr",
    handler: (request, h) => {
      console.info("New DR 5.0 request", request.query);
      return handleRequest(h, request.query, ReportGeneratorR50DR);
    },
  });

  server.route({
    method: "GET",
    path: "/reports",
    handler: (request, h) => {
      return { message: "not supported yet, try /reports/tr" };
    },
  });

  // COP 5.1
  server.route({
    method: "GET",
    path: "/r51/reports/tr",
    handler: (request, h) => {
      console.info("New TR 5.1 request", request.query);
      return handleRequest(h, request.query, ReportGeneratorR51TR);
    },
  });

  server.route({
    method: "GET",
    path: "/r51/reports/dr",
    handler: (request, h) => {
      console.info("New DR 5.1 request", request.query);
      return handleRequest(h, request.query, ReportGeneratorR51DR);
    },
  });

  // Common paths
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return {
        message:
          'This is a fake SUSHI server "sashimi". Use /reports/tr or /reports/dr to ' +
          "get sample data for CoP 5.0 reports, or /r51/reports/tr and /r51/reports/dr for " +
          "CoP 5.1 reports. Read more at https://github.com/Big-Dig-Data/sashimi",
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
