const d = document,
	$form = d.getElementById("form-crear");

export default function crearReceta() {
	d.addEventListener("submit", async (e) => {
		e.preventDefault(); //Aveces no se crea
		if (e.target === $form) {
			let data = new FormData($form);
			data.append("id", localStorage.getItem("id"));

			let response = await fetch(`.././PHP/crearReceta.php`, {
					method: "POST",
					body: data,
				}),
				json = await response.json();
			console.log(json);

			if (json[0].rta === "bien") {
				(response = await fetch(`.././PHP/agregarPasos.php`, {
					method: "POST",
					body: data,
				})),
					(json = await response.json());
				console.log(json);
			}
		}
	});
}
