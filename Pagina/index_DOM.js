import burguerMenu from "./JS/burguerMenu.js";
import recetaButtonsInteraction from "./JS/recetaSections.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	burguerMenu(".menu", ".menu-btn", ".menu-bg");
	recetaButtonsInteraction("[href^='#descripcion']", "[href^='#ingredientes']");
});
