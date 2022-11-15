const d = document,
	$favBtn = d.querySelector(".tus-favoritos-btn"),
	$propiasBtn = d.querySelector(".tus-recetas-btn"),
	$favConteiner = d.querySelector(".favoritas"),
	$propiasConteiner = d.querySelector(".propias"),
	$crearBtn = d.querySelector(".receta-crear");

export default function recetaBtns() {
	d.addEventListener("click", (e) => {
		if (e.target === $favBtn) {
			$favBtn.classList.add("back-btn");
			$favConteiner.classList.remove("none");
			$propiasBtn.classList.remove("back-btn");
			$propiasConteiner.classList.add("none");
			$crearBtn.classList.add("none");
		}
		if (e.target === $propiasBtn) {
			$propiasBtn.classList.add("back-btn");
			$propiasConteiner.classList.remove("none");
			$favBtn.classList.remove("back-btn");
			$favConteiner.classList.add("none");
			$crearBtn.classList.remove("none");
		}

		if (e.target === $crearBtn)
			location.href = "http://localhost/pagina-recetas/page_crearReceta/crearReceta.html";
	});
}
