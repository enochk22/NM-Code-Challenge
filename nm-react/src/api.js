import axios from "axios";

export default {
	doges: {
		fetchAll: breedN =>
			axios.get("/api/doge", {
				params: breedN
			})
	}
};
