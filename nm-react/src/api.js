import axios from "axios";

export default {
	doges: {
		fetchBreed: breedN =>
			axios.get("/api/doge", {
				params: breedN
			}),
		fetchAll: () => axios.get("/api/dogeName")
	}
};
