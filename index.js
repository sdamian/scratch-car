const express = require("express");
const app = express();

// This middleware will parse the incoming request body
// and populates req.body with the parsed object.
app.use(express.json());

// serve static files
app.use(express.static("public"));

const baseUrl = "http://10.48.30.86";
const move = {
    forward: 1,
    right: 2,
    stop: 3,
    left: 4,
    back: 5,
};

app.post("/car", async (req, res) => {
    const direction = req.query.move;
    console.log("move", direction);
    await fetch(baseUrl + "/control?var=car&val=" + move[direction]);
    await new Promise((resolve) => setTimeout(resolve, 500)); // wait 1 second
    console.log("stop");
    await fetch(baseUrl + "/control?var=car&val=" + move.stop);
    res.send("ok");
});

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});
