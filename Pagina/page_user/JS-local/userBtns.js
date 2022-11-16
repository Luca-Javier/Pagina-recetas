const d = document;

export default function userBtns() {
	d.addEventListener("click", (e) => {
		if (e.target.matches("#btn-salir")) {
			location.href = "http://localhost/pagina-recetas/page_index/";
			localStorage.clear();
		}
	});
}
