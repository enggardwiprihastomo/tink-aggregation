const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const fetch = require("node-fetch")
const { handleResponse } = require("./sharable")

const app = express()
require("dotenv").config()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client/dist")))

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const base = "https://api.tink.com/api/v1"

app.post("/", async function (req, res) {
    try {
        const response = await getAccessToken(req.body.code)
        const json = await getTransactionData(response.access_token)
        res.send({ transactions: json.results })
    }
    catch (err) {
        console.error(err)
    };
});

async function getTransactionData(token) {
    const response = await fetch(base + "/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify({ limit: 1000 })
    });

    return handleResponse(response);
}

async function getAccessToken(code) {
    const body = {
        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code"
    };
    try {
        const response = await fetch(base + "/oauth/token", {
            method: "POST",
            body: Object.keys(body)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(body[key]))
                .join("&"),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        });

        return handleResponse(response)
    }
    catch (err) {
        console.error(err)
    }
}

const port = 8080;
app.listen(port, () => console.log(`Listening on port: ${port}`));