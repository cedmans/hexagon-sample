# Clean Architecture Sample

## Setting up

Install your Node dependencies

```bash
$ yarn install
# == OR ==
$ npm install
```

## Running

Ensure that your application has a `.env` file. This should happen automatically with `yarn install` or `npm install`. If not, copy `.env.example` to `.env`.

```bash
$ npm start
```

## Production Build

The development mode uses `ts-node` (enabling live debugging), which the author does not guarantee is prepared for production.

Build the Node-compliant code

```bash
$ npm run build
```

Built files will be placed in `/dist`.

Modify your `.env` file to "production" mode
```ini
# .env
NODE_ENV=production
PORT=8080
```

Run the server

```bash
$ npm start
```