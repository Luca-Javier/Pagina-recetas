const d = document;

export default function recetaInteractionForId(
	receta,
	descrpicionBtn,
	ingredientesBtn,
	descripcion,
	ingredientes
) {
	d.addEventListener("click", (e) => {
		if (e.path.includes(d.querySelector(receta))) {
		}
	});
}
