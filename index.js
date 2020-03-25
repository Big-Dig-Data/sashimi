//'use strict';

import {createReportData} from './reports'

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
            let monthStart = '2020-01'
            let monthEnd = '2020-02'
            let report = createReportData(monthStart, monthEnd)
            return report
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

import parseISO from 'date-fns/parseISO'
console.log(parseISO('2020-01'))

init();
