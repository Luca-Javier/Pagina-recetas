const d = document;

export default function userBtns() {
	d.addEventListener("click", (e) => {
		if (e.target.matches(".user-conteiner > img")) {
			const $options = d.querySelector(".user-btns");
			$options.classList.contains("none")
				? $options.classList.remove("none")
				: $options.classList.add("none");
		}
		if (e.target.matches("#btn-salir")) {
			location.href = "http://localhost/pagina-recetas/page_index/";
			localStorage.clear();
		}
	});
}
