import express from "express";
import request from "request-promise";

const router = express.Router();

router.get("/", (req, res) => {
	request
		.get(`https://dog.ceo/api/breed/${req.query[0]}/images`)
		.then(doges => res.send(doges));
});

export default router;
