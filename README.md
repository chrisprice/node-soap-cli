# node-soap-cli

A command line client for SOAP endpoints

## Installation

```sh
npm install --global soap-cli
```

## Usage

Specify a SOAP endpoint URL, function name and JSON file containing arguments -

```sh
soapcli <url> <func> [json-args-file]
```

Example -

```sh
echo "{ \"symbol\": \"GOOG\" }" | soapcli http://www.webservicex.com/stockquote.asmx GetQuote
```
