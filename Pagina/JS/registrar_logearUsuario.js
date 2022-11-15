const d = document,
	$formRegistrar = d.getElementById("registrarse"),
	$formLogear = d.getElementById("logearse");

export default function registrarUsuario() {
	d.addEventListener("submit", async (e) => {
		if (e.target === $formRegistrar) {
			e.preventDefault();
			let response = await fetch(`../PHP/registrarUsuario.php`, {
					method: "POST",
					body: new FormData($formRegistrar),
				}),
				json = await response.json();

			if (json[0].rta === "bien") {
				d.querySelector("#logearse [name='usuario']").value = $formRegistrar.usuario.value;
				location.hash = "logearse";
			} else alert("No te has podido registrar");
		}
	});
}

export function logearUsuario() {
	d.addEventListener("submit", async (e) => {
		if (e.target === $formLogear) {
			let response = await fetch(`../PHP/logearUsuario.php`, {
					method: "POST",
					body: new FormData($formLogear),
				}),
				json = await response.json();

			json.forEach((el) => {
				localStorage.setItem("id", el.id);
				localStorage.setItem("name", el.name);
				localStorage.setItem("img", el.img);
			});
		}
	});
}
