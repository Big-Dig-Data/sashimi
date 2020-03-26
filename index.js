'use strict';

import { createReportData } from './reports'
import parseISO from 'date-fns/parseISO'

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/reports/tr',
        handler: (request, h) => {
            let monthStart = 'begin_date' in request.query ? request.query.begin_date : '2020-01'
            let monthEnd = 'end_date' in request.query ? request.query.end_date : monthStart
            let requestorId = 'requestor_id' in request.query ? request.query.requestor_id : ''
            let customerId = 'customer_id' in request.query ? request.query.customer_id : ''
            return createReportData(monthStart, monthEnd, [requestorId, customerId])
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
