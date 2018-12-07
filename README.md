# werkstatt
[![Build Status](https://travis-ci.org/technology-ebay-de/werkstatt.svg?branch=master)](https://travis-ci.org/technology-ebay-de/werkstatt)

A place to program in your browser.

## Development
Clone the repository

```sh
git clone https://github.com/technology-ebay-de/werkstatt.git
cd werkstatt/api
```

Install dependencies

```sh
pip install -r requirements-dev.txt
```

Run the application in development mode

```sh
FLASK_APP=werkstatt FLASK_ENV=development FLASK_RUN_PORT=5001 flask run
```

Open [localhost:5001](http://localhost:5001) in your browser.

## License

[MIT licensed](LICENSE)

Copyright © 2018 [mobile.de GmbH](https://www.mobile.de)
