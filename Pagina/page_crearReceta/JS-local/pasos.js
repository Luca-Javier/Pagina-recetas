const d = document,
	$inputNum = d.querySelector(`input[name="num-pasos"]`),
	$conteinerTop = d.querySelector(".card-paso");

let numPasos = 0,
	espacioRegex = /\s/;

const resetearTituloPaso = () => {
	const $title = d.querySelectorAll(".paso-title");
	let num = 1;
	$title.forEach((el) => {
		el.textContent = `Paso ${num}`;
		num++;
	});
};

export default function pasos() {
	d.addEventListener("click", (e) => {
		if (e.target.matches(".add-paso *")) {
			numPasos++;
			$inputNum.setAttribute("value", numPasos);
			const $paso = `<article class="input-title">
            <p><b class="paso-title"></b></p>

            <div class="input-options">
              <img src="../assets/menu-bars.svg" alt="Arrastrable">
              <input type="text" placeholder="Paso" title="Carácteres de la a-z , 0-9 y /|.(),"
                pattern="^[(),/|.0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü${espacioRegex}]+$" name="paso-${numPasos}">
              <img src="../assets/trash-solid.svg" alt="eliminar">
            </div>

          </article>`;

			/* <article class="image image-paso" data-img-upload>
            <input type="file" hidden name="img-paso-${numPasos}">
            <p><img src="../assets/image-regular.svg" alt="Pon una imagen" data-img-txt></p>
            <img class="none" src="" alt="Imagen del paso" data-img-visualizar>
          </article>;` */

			$conteinerTop.insertAdjacentHTML("beforeend", $paso);
			resetearTituloPaso();
		}
		if (e.target.matches('#pasos-conteiner img[alt="eliminar"]')) {
			let $conteinerInput = e.target.parentNode.parentNode;

			numPasos--;
			$inputNum.setAttribute("value", numPasos);
			//$conteinerInput.nextElementSibling.remove();
			$conteinerInput.remove();
			resetearTituloPaso();
		}
	});
}
