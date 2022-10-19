import burguerMenu, { burguerLogin } from "./JS/burguerMenu.js";
import recetaInteractionForId from "./JS/recetaInteractionForId.js";
import recetaButtonsInteraction from "./JS/recetaSections.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	burguerMenu(".menu", ".menu-btn", ".menu-bg");
	burguerLogin("[data-user]", "#modal-login");
	/* recetaButtonsInteraction(
		"[href^='#descripcion']",
		"[href^='#ingredientes']",
		".receta-title"
	); */
	//recetaInteractionForId(".receta", "#descripcion");
});
