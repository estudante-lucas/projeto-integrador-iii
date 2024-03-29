const url = "http://localhost:3000/api/";

const post = async (route: string, data: any) => {
	return await fetch(url + route, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then(async (res) => await res.json())
	.catch(error => console.log(error))
};

const get = async (route: string) => {
	return await fetch(url + route, {
		method: "GET",
		headers: {
			"Accept": "application/json",
		},
	}).then(async (response) => {
		return await response.json();
	}).catch(error => {
		console.error(error);
		return null;
	});
};

export {
	post,
	get
};

