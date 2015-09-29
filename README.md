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
$ echo '{ "symbol": "GOOG" }' | soap-cli http://www.webservicex.com/stockquote.asmx GetQuote
{
 "GetQuoteResult": "<StockQuotes><Stock><Symbol>GOOG</Symbol><Last>595.50</Last><Date>9/29/2015</Date><Time>9:36am</Time><Change>+0.61</Change><Open>597.50</Open><High>597.80</High><Low>595.05</Low><Volume>74867</Volume><MktCap>408.24B</MktCap><PreviousClose>594.89</PreviousClose><PercentageChange>+0.10%</PercentageChange><AnnRange>486.23 - 678.64</AnnRange><Earns>21.22</Earns><P-E>28.06</P-E><Name>Google Inc.</Name></Stock></StockQuotes>"
}

```
