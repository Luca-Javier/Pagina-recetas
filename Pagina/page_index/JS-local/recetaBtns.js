const d = document;

export default function recetaBtns() {
	d.addEventListener("click", (e) => {
		if (
			e.target.matches(`[href="#descripcion"]`) ||
			e.target.matches(`[href="#ingredientes"]`)
		) {
			const $btnSelector = e.target.getAttribute("href"),
				$receta = e.target.parentNode.parentNode,
				$titulo = $receta.querySelector("[data-receta-title]");

			if (e.target.classList.contains("isActive")) {
				$receta.querySelector($btnSelector).classList.remove("isActive");
				e.target.classList.remove("isActive");
				$titulo.classList.remove("isActive");
			} else {
				$receta.querySelector($btnSelector).classList.add("isActive");
				e.target.classList.add("isActive");
				$titulo.classList.add("isActive");

				let $otherBtnSelector;
				$btnSelector === "#descripcion"
					? ($otherBtnSelector = "#ingredientes")
					: ($otherBtnSelector = "#descripcion");
				$receta.querySelector($otherBtnSelector).classList.remove("isActive");
				$receta.querySelector(`a[href="${$otherBtnSelector}"]`).classList.remove("isActive");
			}
		}
		if (e.target.matches(`[href^="../page_receta"]`)) {
			localStorage.setItem(
				"id_receta",
				e.target.parentNode.parentNode.querySelector("[data-receta-id]").value
			);
		}
	});
}
