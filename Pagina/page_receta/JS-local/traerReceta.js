const d = document,
	data = new FormData();
data.append("id", localStorage.getItem("id_receta"));

export default function traerReceta() {
	d.addEventListener("DOMContentLoaded", async (e) => {
		let response = await fetch(`.././PHP/traerLaReceta.php`, {
				method: "POST",
				body: data,
			}),
			json = await response.json();

		json.forEach((el) => {
			d.querySelector("[data-receta-img]").style.setProperty(
				"background-image",
				`URL(../imagenes-locales/${el.img})`
			);
			d.querySelector("[data-receta-title]").textContent = el.name;
			/* d.querySelector("[data-receta-user-img]").src += el.imgUser;
			d.querySelector("[data-receta-user-name]").textContent = el.nameUser; */
			d.querySelector("[data-receta-desc]").textContent = el.desc;
			el.ingredientes.split("@").forEach((ing) => {
				d.querySelector("[data-recetas-ingredientes]").insertAdjacentHTML(
					"beforeend",
					`<li>${ing}</li>`
				);
			});

			if (el.idUser === localStorage.getItem("id")) {
				d.querySelectorAll("[data-admin-mostrar]").forEach((el) => {
					el.classList.remove("none");
				});
				d.querySelector("[data-admin-ocultar]").classList.add("none");
			}
		});
	});
}

export function traerPasos() {
	d.addEventListener("DOMContentLoaded", async (e) => {
		let response = await fetch(`.././PHP/traerPasos.php`, {
				method: "POST",
				body: data,
			}),
			json = await response.json();

		let numPaso = 0;
		const $fragment = d.createDocumentFragment(),
			$template = d.querySelector(".pasos-template").content;

		json.forEach((el) => {
			numPaso++;
			$template.querySelector("[data-pasos-num]").textContent = `Paso ${numPaso}`;
			$template.querySelector(
				"[data-pasos-descripcion]"
			).innerHTML = `<li>${el.descripcion}</li>`;

			$fragment.appendChild(d.importNode($template, true));
		});
		d.getElementById("pasos-conteiner").appendChild($fragment);
	});
}
