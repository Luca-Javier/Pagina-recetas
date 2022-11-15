const d = document,
	$inputNum = d.querySelector(`input[name="num-ingredientes"]`),
	$conteinerTop = d.querySelector(".add-ingrediente");

let numIngrediente = 2,
	espacioRegex = /\s/;

export default function ingredientes() {
	d.addEventListener("click", (e) => {
		if (e.target.matches(".add-ingrediente *")) {
			numIngrediente++;
			$inputNum.setAttribute("value", numIngrediente);
			const $ingrediente = `<article class="input-options">
            <img src="../assets/menu-bars.svg" alt="Arrastrable">
            <input type="text" placeholder="Ingrediente" title="Carácteres de la a-z , 0-9 y /|.()," required
              pattern="^[(),/|.0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü${espacioRegex}]+$" name="ingrediente-${numIngrediente}">
            <img src="../assets/trash-solid.svg" alt="eliminar">
          </article>`;

			$conteinerTop.insertAdjacentHTML("beforebegin", $ingrediente);
		}
		if (e.target.matches('#ingrediente-conteiner img[alt="eliminar"]')) {
			numIngrediente--;
			$inputNum.setAttribute("value", numIngrediente);
			e.target.parentNode.remove();
		}
	});
}
