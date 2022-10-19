import burguerMenu, { burguerLogin } from "../JS/burguerMenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	burguerMenu(".menu", ".menu-btn", ".menu-bg");
	burguerLogin("[data-user]", "#modal-login");
});
