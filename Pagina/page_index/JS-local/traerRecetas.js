const d = document,
	$template = d.querySelector("template").content,
	$conteinerIntoBottom = d.querySelector(".section-margins");

export default function traerAll() {
	d.addEventListener("DOMContentLoaded", async (e) => {
		let response = await fetch(`.././PHP/traerRecetasAll.php`),
			json = await response.json();

		json.forEach((el) => {
			const $fragment = d.createDocumentFragment();

			$template
				.querySelector("[data-receta-img]")
				.style.setProperty("background-image", `URL(../imagenes-locales/${el.img})`);
			$template.querySelector("[data-receta-title]").textContent = el.name;
			$template.querySelector("[data-receta-user-img]").src += el.imgUser;
			$template.querySelector("[data-receta-user-name]").textContent = el.nameUser;
			$template.querySelector("[data-receta-desc]").textContent = el.desc;
			el.ingredientes.split("@").forEach((ing) => {
				$template
					.querySelector("[data-recetas-ingredientes]")
					.insertAdjacentHTML("beforeend", `<li>${ing}</li>`);
			});

			$fragment.appendChild(d.importNode($template, true));
			$conteinerIntoBottom.appendChild($fragment);
		});
	});
}
