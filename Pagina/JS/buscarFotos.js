const d = document;

export default function subirImagenes() {
	d.addEventListener("click", (e) => {
		if (e.target.matches("[data-img-upload]") || e.target.matches("[data-img-visualizar]")) {
			const $input =
					e.target.querySelector("[type='file']") ||
					e.target.parentNode.querySelector("[type='file']"),
				$imagenPrevisualizacion = e.target.querySelector("[data-img-visualizar]") || e.target,
				$texto =
					e.target.querySelector("[data-img-txt]") ||
					e.target.parentNode.querySelector("[data-img-txt]");

			$input.click();

			$input.addEventListener("change", (e) => {
				let archivo = $input.files;

				if (!archivo || !archivo.length) {
					$imagenPrevisualizacion.src = "";
					$imagenPrevisualizacion.classList.add("none");
					$texto.classList.remove("none");
					return;
				}
				$imagenPrevisualizacion.src = URL.createObjectURL(archivo[0]);
				$imagenPrevisualizacion.classList.remove("none");
				$texto.classList.add("none");
			});
		}
	});
}
/* 
export function cantImgsPasos() {
	let numImgs = 0;
	d.addEventListener("click", (e) => {
		if (e.target.matches("[data-img-upload]") || e.target.matches("[data-img-visualizar]")) {
			const $input =
				e.target.querySelector("[type='file']") ||
				e.target.parentNode.querySelector("[type='file']");

			$input.addEventListener("change", (e) => {
				let archivo = $input.files;

				if (!archivo || !archivo.length) {
					$imagenPrevisualizacion.src = "";
					$imagenPrevisualizacion.classList.add("none");
					$texto.classList.remove("none");
					numImgs--;
					d.addEventListener(`[name="num-img-pasos"]`).value = numImgs;
					return;
				}

				numImgs++;
				d.addEventListener(`[name="num-img-pasos"]`).value = numImgs;
			});
		}
	});
}
 */
