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
        path: '/',
        handler: (request, h) => {
            let monthStart = 'begin_date' in request.query ? request.query.begin_date : '2020-01'
            let monthEnd = 'end_date' in request.query ? request.query.end_date : '2020-01'
            return createReportData(monthStart, monthEnd)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

console.log(parseISO('2020-01'))

init();
