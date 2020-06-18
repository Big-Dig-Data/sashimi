'use strict'

import { createReportData as createReportDataTR } from './tr'
import { createReportData as createReportDataDR } from './dr'

const Hapi = require('@hapi/hapi')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/reports/tr',
        handler: (request, h) => {
            console.info('New TR request', request.query)
            let monthStart = 'begin_date' in request.query ? request.query.begin_date : '2020-01'
            let monthEnd = 'end_date' in request.query ? request.query.end_date : monthStart
            let requestorId = 'requestor_id' in request.query ? request.query.requestor_id : ''
            let customerId = 'customer_id' in request.query ? request.query.customer_id : ''
            return createReportDataTR(monthStart, monthEnd, customerId, [requestorId, customerId])
        }
    })

    server.route({
        method: 'GET',
        path: '/reports/dr',
        handler: (request, h) => {
            console.info('New DR request', request.query)
            let monthStart = 'begin_date' in request.query ? request.query.begin_date : '2020-01'
            let monthEnd = 'end_date' in request.query ? request.query.end_date : monthStart
            let requestorId = 'requestor_id' in request.query ? request.query.requestor_id : ''
            let customerId = 'customer_id' in request.query ? request.query.customer_id : ''
            return createReportDataDR(monthStart, monthEnd, customerId, [requestorId, customerId])
        }
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

init()
