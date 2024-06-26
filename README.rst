=======
Sashimi
=======

Sashimi is a fake SUSHI provider and COUNTER 5.0 / 5.1 report generator. It acts as a server
exposing a very limited but useful part of the SUSHI API.

You can use Sashimi to generate random data to test your SUSHI client. This is how we
use at Big Dig Data - as a source of data for `Celus <https://www.celus.net/>`_ online demo.


Installation
============

Sashimi is written in JavaScript to run under Node.js. Therefore you need to install Node.js
(we recommend version 16 or above).

Before running Sashimi for the first time, you need to install the required packages by running::

    npm install

inside the Sashimi directory.


Usage
=====

You can start Sashimi using the following command from the Sashimi directory::

    npm run start

Sashimi will start to listen on a local address using port 3000. If the port is not available,
an error message will be shown.

After Sashimi starts, you can use the address `http://localhost:3000/reports/tr` or
`http://localhost:3000/reports/dr` to get sample SUSHI report for COUNTER 5.0.

If you want to use COUNTER 5.1, you can use the address `http://localhost:3000/r51/reports/tr` or
`http://localhost:3000/r51/reports/dr`.

You can use the following arguments to influence the generated data:

begin_date
  The standard SUSHI ``begin_date`` argument. If not given, a default value will be used

end_date
  The standard SUSHI ``end_date`` argument. Defaults to ``begin_date``

requestor_id
  The standard SUSHI ``requestor_id`` argument.

customer_id
  The standard SUSHI ``customer_id`` argument.


Features
========

* uses real journal and database names when generating reports
* data are pseudo-randomly generated - data are random, but the same input always results in the
  same output
* mimics the usually observed distribution of hits where a few journals/databases have high
  interest and others not so much
* supports both COUNTER 5.0 and 5.1 compatible interfaces (5.1 support under the `/r51/` path)


Limitations
===========

* only supports TR and DR master reports
* does not support YOP
* data are not internally consistent - e.g. you can have more Requests than Investigations, which
  should not happen in the real world
* ``customer_id`` and ``requestor_id`` are not used for authentication - the system will happily
  generate data for anybody :)
* the generator for CoP 5.0 only generates data for the first month if more than one month is
  requested (this limitation does not apply to CoP 5.1)


Bugs and suggestions
====================

We publish Sashimi in the hope that it could be helpful to someone somewhere someday. We do not
intend to extend the software outside the scope we need it for.

If you find any bugs, we would be happy if you let us know - preferably on Github, ideally in
the form of a pull request. If you would like to have a feature added, you can try contacting
us as well, but we do not guarantee anything.


