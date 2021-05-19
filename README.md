# Tink Aggregation
Simple account aggregation with Tink Link

<p align="center">
  <img src="https://github.com/enggardwiprihastomo/tink-aggregation/blob/master/snapshot/snapshot.png" width="50%"/>
</p>

# Installation
Please be aware to follow these steps before running the application
1. Install all the necessary dependencies with `npm install`
1. Create your developer account at [Tink Console](https://console.tink.com/)
1. Follow the [getting started guide](https://docs.tink.com/resources/getting-started/set-up-your-account) to retrieve your `client_id` and `client_secret`
1. Register the redirect URI for the example app (http://localhost:3000/api) in the [list of redirect URIs](https://console.tink.com/overview) under your app's settings
1. Register the `CLIENT_ID` and `CLIENT_SECRET` to `.env` file in the root directory of the application

# Available Scripts
In order to run the project, there are 3 scripts available

### `npm run client`
Runs the client on port 3000 in development mode and automatically redirects to default browser.  Alternatively, open [http://localhost:3000](http://localhost:3000) to view it in the specific or desired browser.

### `npm run server`
Runs the server on port 8080

### `npm start`
Runs the server and client simultaneously

The scripts above triger the application to refresh automatically whenever changes occur.

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.
