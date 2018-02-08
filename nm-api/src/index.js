import express from "express";
import path from "path";
import doge from "./routes/doge";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use("/api/doge", doge);
//get request
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost: 8080"));
