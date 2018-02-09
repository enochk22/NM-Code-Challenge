import express from "express";
import request from "request-promise";

const router = express.Router();

router.get("/", (req, res) => {
	request
		.get(`https://dog.ceo/api/breeds/list`)
		.then(dogeNames => res.send(dogeNames));
});

export default router;
