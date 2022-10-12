export default function burguerMenu(menu, menuBtn, menuBg) {
	const d = document,
		/* $menuBtn = d.querySelector(menuBtn),
		$menu = d.querySelector(menu), */
		SECCIONES = [
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
		];

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
