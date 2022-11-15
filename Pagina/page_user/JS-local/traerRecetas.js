const d = document;

export default function traerFavoritas() {
	d.addEventListener("DOMContentLoaded", async (e) => {
		let response = await fetch(`../`),
			json = await response.json();

		console.log(json);
	});
}

export function traerPropias() {
	d.addEventListener("DOMContentLoaded", async (e) => {
		let response = await fetch(``),
			json = await response.json();

		console.log(json);
	});
}
