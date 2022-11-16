const d = document,
	$recetaOptions = d.getElementById("options-menu");

export default function options() {
	d.addEventListener("click", async (e) => {
		if (e.target.matches(".options-receta svg")) {
			$recetaOptions.classList.contains("isActive")
				? $recetaOptions.classList.remove("isActive")
				: $recetaOptions.classList.add("isActive");
		} else $recetaOptions.classList.remove("isActive");

		if (e.target.matches(".btn-receta-eliminar")) {
			let response = await fetch(``, {
					method: "POST",
					body: new FormData().append("id", localStorage("id_receta")),
				}),
				json = await response.json();

			console.log(json);
		}
		if (e.target.matches(".btn-receta-guardar")) {
			let response = await fetch(``, {
					method: "POST",
					body: new FormData().append("id", localStorage("id_receta")),
				}),
				json = await response.json();

			console.log(json);
		}
	});
}
