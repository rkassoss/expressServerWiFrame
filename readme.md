# Test Qlik Iframe vs Qlik Embed library

Comparing funcitonality between IFrame and Qlik Embed when embedding the full Qlik app to a web page.

## Description

A simple html file with an IFrame to test if the copy cell value work on a Qlik table when it is embedded as part of the whole Qlik client.

```
<iframe src="https://[tenant_host]/sense/app/[appId]/sheet/[sheetId]/state/analysis" allow="clipboard-write"
```

## Getting Started

### Dependencies

* NodeJS
* ExpresJS

### Installing

* Run `npm install`
* Make sure to create certificates for running server on https potocol
```
openssl req -newkey rsa:4096 \
            -x509 \
            -sha256 \
            -days 3650 \
            -nodes \
            -out localhost.crt \
            -keyout localhost.key
```

### Executing program

```
node index.js
```

## Help

[Read more about Qlik Embed](https://preview.qlik.dev/embed-js-preview/embed/embed-quick-starts/embed-js-quickstart)

