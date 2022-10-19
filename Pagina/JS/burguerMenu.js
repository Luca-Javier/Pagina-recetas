const d = document;
export default function burguerMenu(menu, menuBtn, menuBg) {
	/* SECCIONES = [
			"Desayuno",
			"Carne",
			"Pastas",
			"Postres",
			"Vegano",
			"Ensaladas",
			"Mariscos",
			"Pizzas",
			"Empanadas",
			"Sandwiches",
			"Milanesas",
		]; */

	d.addEventListener("click", (e) => {
		if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
			d.querySelector(menu).classList.toggle("isActive");
			d.querySelector(menuBg).classList.toggle("isActive");
		}
		if (e.target.matches(`${menu} *`) || e.target.matches(menuBg)) {
			d.querySelector(menu).classList.remove("isActive");
			d.querySelector(menuBg).classList.remove("isActive");
		}
	});
}
export function burguerLogin(btn, open) {
	const $open = d.querySelector(open);

	d.addEventListener("click", (e) => {
		if ($open.classList.contains("isActive") && !e.target.matches(`${open} *`))
			$open.classList.remove("isActive");

		if (e.target.matches(btn) || e.target.matches(`${btn} *`))
			$open.classList.add("isActive");
	});
}
