const d = document,
	ls = localStorage;

export default function userInfo() {
	const $nombre = d.querySelector(".user-name p"),
		$foto = d.querySelector(".user-name img");

	$nombre.textContent = ls.getItem("name");
	$foto.src += ls.getItem("img");
}
